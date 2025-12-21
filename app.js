/* APP LOGIC 
   Steuert Navigation, Simulator, Drag & Drop
   Version: 10.3 (Hybrid Quiz Extended)
*/

const app = {
    sequence: ['start', 'google', 'ai', 'lab', 'hybrid', 'mission'],
    currentStep: 'start',

    init: function() {
        // Navigation Events
        document.querySelectorAll('.step-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.target.closest('.step-btn').dataset.target;
                this.goToStep(target);
            });
        });

        document.getElementById('next-btn').addEventListener('click', () => {
            this.nextStep();
        });

        // Simulator Events
        ['sim-params', 'sim-data', 'sim-compute'].forEach(id => {
            const el = document.getElementById(id);
            if(el) el.addEventListener('input', () => this.updateSim());
        });

        // Start
        this.goToStep('start');
    },

    goToStep: function(targetId) {
        if (!this.sequence.includes(targetId)) return;
        this.currentStep = targetId;
        this.updateUI();
    },

    nextStep: function() {
        const currentIdx = this.sequence.indexOf(this.currentStep);
        if (currentIdx < this.sequence.length - 1) {
            this.goToStep(this.sequence[currentIdx + 1]);
        }
    },

    updateUI: function() {
        const mode = this.currentStep;
        const data = modules[mode];

        // 1. Navigation aktiv setzen
        document.querySelectorAll('.step-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.target === mode);
        });

        // 2. Views umschalten
        document.querySelectorAll('main').forEach(m => m.classList.remove('active'));
        document.getElementById(`view-${mode}`).classList.add('active');

        // 3. Footer und Inhalte laden
        const hintBox = document.getElementById('footer-hint');
        const nextBtn = document.getElementById('next-btn');
        
        // Button auf letzter Seite ausblenden
        nextBtn.style.display = (mode === 'mission') ? 'none' : 'flex';

        if (data) {
            // Hinweis Text setzen
            hintBox.innerHTML = data.hint || "Lies den Text.";

            // Text einfügen (für Split Layouts)
            if (data.text && document.getElementById(`text-${mode}`)) {
                document.getElementById(`text-${mode}`).innerHTML = data.text;
            }

            // HTML Insert (für Start/Lab)
            if (data.type === 'html-insert' && data.targetId) {
                const target = document.getElementById(data.targetId);
                if(target) target.innerHTML = data.content;
            }

            // Puzzles initialisieren (falls vorhanden)
            if (data.puzzle) {
                // Verzögerung hilft beim Rendern
                setTimeout(() => this.initPuzzle(mode, data), 50);
            }

            // Visualisierung Hybrid
            if(mode === 'hybrid') {
                const visContainer = document.getElementById('hybrid-visual-content');
                if(visContainer) {
                    visContainer.innerHTML = ``;
                }
            }

            // Quiz rendern
            if (data.quiz) {
                this.renderQuiz(mode, data.quiz);
            }

            // Mission rendern
            if (mode === 'mission') {
                this.renderMission(data);
            }

            // Glossar Logik anhängen
            setTimeout(() => this.attachGlossary(), 100);
        }
    },

    /* --- PUZZLE LOGIC (FIXED) --- */
    initPuzzle: function(mode, data) {
        const pZone = document.getElementById(`puzzle-${mode}`);
        const tBox = document.getElementById(`toolbox-${mode}`);
        
        if (!pZone || !tBox) return;

        pZone.innerHTML = ''; 
        tBox.innerHTML = '';

        // Drop Zones erstellen
        data.puzzle.forEach((step, i) => {
            if (i > 0) {
                const arrow = document.createElement('div');
                arrow.className = 'arrow-down';
                arrow.innerText = '⬇️';
                pZone.appendChild(arrow);
            }

            const el = document.createElement('div');
            el.className = 'drop-zone';
            el.dataset.label = step.label;
            el.dataset.target = step.correct;
            
            // Event Listeners
            el.ondragover = (e) => { 
                e.preventDefault(); 
                el.classList.add('hovered');
            };
            el.ondragleave = () => el.classList.remove('hovered');
            el.ondrop = (e) => this.handleDrop(e, el);

            pZone.appendChild(el);
        });

        // Draggables erstellen
        [...data.items].sort(() => Math.random() - 0.5).forEach(item => {
            const el = document.createElement('div');
            el.className = 'draggable-item';
            el.draggable = true;
            el.innerText = item.text;
            el.dataset.type = item.type;
            
            el.ondragstart = (e) => {
                e.dataTransfer.setData('type', item.type);
                e.dataTransfer.setData('text', item.text);
                el.classList.add('dragging');
            };
            el.ondragend = () => el.classList.remove('dragging');
            
            tBox.appendChild(el);
        });
    },

    handleDrop: function(e, zone) {
        e.preventDefault();
        zone.classList.remove('hovered');
        
        // Wenn schon gelöst, nichts tun
        if(zone.classList.contains('correct')) return;

        const type = e.dataTransfer.getData('type');
        const text = e.dataTransfer.getData('text');
        
        if (type === zone.dataset.target) {
            zone.innerText = text; 
            zone.classList.add('correct');
            // Altes Element löschen
            const old = document.querySelector('.draggable-item.dragging');
            if(old) old.remove();
        } else {
            // Visuelles Feedback für Falsch
            zone.style.backgroundColor = '#fce8e6';
            setTimeout(() => zone.style.backgroundColor = 'rgba(255,255,255,0.8)', 500);
        }
    },

    /* --- SIMULATOR --- */
    updateSim: function() {
        const p = parseInt(document.getElementById('sim-params').value);
        const d = parseInt(document.getElementById('sim-data').value);
        const c = parseInt(document.getElementById('sim-compute').value);
        
        const potential = (p + d) / 2;
        let realized = c >= potential ? potential : c + (potential - c) * 0.1;
        
        document.getElementById('iq-val').innerText = Math.round(realized);
        document.getElementById('bar-iq').style.width = realized + '%';
        
        let energy = (p * d) / 80;
        document.getElementById('bar-nrg').style.width = Math.min(energy, 100) + '%';
        
        document.getElementById('b1').style.display = realized > 10 ? 'inline-block' : 'none';
        document.getElementById('b2').style.display = realized > 40 ? 'inline-block' : 'none';
        document.getElementById('b3').style.display = realized > 70 ? 'inline-block' : 'none';
        document.getElementById('b4').style.display = realized > 90 ? 'inline-block' : 'none';

        document.getElementById('sim-warn').style.display = (c < potential - 15) ? 'block' : 'none';
    },

    /* --- RENDER HELPER --- */
    renderQuiz: function(mode, questions) {
        const container = document.getElementById(`quiz-${mode}`);
        if(!container) return;
        container.innerHTML = '';
        
        questions.forEach(q => {
            const el = document.createElement('div');
            el.className = 'quiz-option';
            el.innerText = q.text;
            el.onclick = function() {
                this.style.background = q.correct ? '#e6f4ea' : '#fce8e6';
                this.innerText = q.feedback;
            };
            container.appendChild(el);
        });
    },

    renderMission: function(data) {
        document.getElementById('text-mission-intro').innerHTML = data.intro;

        const toolCont = document.getElementById('mission-tools');
        toolCont.innerHTML = '';
        data.tools.forEach(t => {
            toolCont.innerHTML += `
                <a href="${t.url}" target="_blank" class="ai-tool-card">
                    <span style="font-size:2rem; display:block; margin-bottom:5px;">${t.icon}</span>
                    <h4 style="margin:0; color:#333;">${t.name}</h4>
                    <small style="color:#666;">${t.sub}</small>
                </a>`;
        });

        const taskCont = document.getElementById('mission-tasks');
        taskCont.innerHTML = '';
        data.tasks.forEach((t, i) => {
            let html = `<div class="mission-card">`;
            if(!t.isInfo) html += `<div class="mission-badge">Fall ${i+1}</div>`;
            html += `<h3 style="margin-top:0; color:#333;">${t.title}</h3><p style="line-height:1.6; color:#555;">${t.desc}</p>`;
            
            if(t.prompt) {
                html += `
                <div class="copy-box">
                    <span id="p-${i}">${t.prompt}</span>
                    <button class="step-btn" onclick="app.copyToClip('p-${i}')">Kopieren</button>
                </div>`;
            }
            
            if(!t.isInfo) {
                html += `<div style="background:#fff3cd; color:#856404; padding:10px; border-radius:6px; font-size:0.9rem; margin-top:10px; border:1px solid #ffeeba;">
                            ✍️ <strong>Aufgabe:</strong> Übertrage die Antwort der KI in dein Pages/GoodNotes Dokument.
                         </div>`;
            }
            html += `</div>`;
            taskCont.innerHTML += html;
        });
    },

    copyToClip: function(id) {
        navigator.clipboard.writeText(document.getElementById(id).innerText);
        alert('Text kopiert! Füge ihn jetzt bei der KI ein.');
    },

    attachGlossary: function() {
        const popup = document.getElementById('term-popup');
        document.querySelectorAll('.term').forEach(t => {
            t.onmouseenter = e => {
                popup.innerText = t.dataset.def;
                popup.style.display = 'block';
                popup.style.left = (e.clientX + 10) + 'px';
                popup.style.top = (e.clientY + 10) + 'px';
            };
            t.onmouseleave = () => popup.style.display = 'none';
        });
    }
};

// Start
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});