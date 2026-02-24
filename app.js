/* APP LOGIC 
   Steuert Navigation, Simulator, Drag & Drop, Mission & Schul-Modul
   Version: 11.0 (Final)
*/

const app = {
    // Die Reihenfolge der Seiten
    sequence: ['start', 'google', 'ai', 'lab', 'lab2', 'hybrid', 'mission', 'school'],
    currentStep: 'start',

    init: function () {
        // Navigation Events (Header Buttons)
        document.querySelectorAll('.step-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.target.closest('.step-btn').dataset.target;
                this.goToStep(target);
            });
        });

        // "Weiter" Button im Footer
        document.getElementById('next-btn').addEventListener('click', () => {
            this.nextStep();
        });

        // Simulator Events (Slider)
        ['sim-params', 'sim-data', 'sim-compute'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('input', () => this.updateSim());
        });

        // Initial update for simulator
        this.updateSim();

        // Start
        this.goToStep('start');
    },

    goToStep: function (targetId) {
        if (!this.sequence.includes(targetId)) return;
        this.currentStep = targetId;
        this.updateUI();
    },

    nextStep: function () {
        const currentIdx = this.sequence.indexOf(this.currentStep);
        if (currentIdx < this.sequence.length - 1) {
            this.goToStep(this.sequence[currentIdx + 1]);
        }
    },

    updateUI: function () {
        const mode = this.currentStep;
        const data = modules[mode];

        // 1. Navigation aktiv setzen
        document.querySelectorAll('.step-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.target === mode);
        });

        // 2. Views umschalten
        document.querySelectorAll('main').forEach(m => m.classList.remove('active'));
        const view = document.getElementById(`view-${mode}`);
        if (view) view.classList.add('active');

        // 3. Footer und Inhalte laden
        const hintBox = document.getElementById('footer-hint');
        const nextBtn = document.getElementById('next-btn');

        // Button auf letzter Seite ausblenden
        nextBtn.style.display = (mode === 'school') ? 'none' : 'flex';

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
                if (target) target.innerHTML = data.content;
            }

            // Puzzles initialisieren (mit Verzögerung für DOM-Aufbau)
            if (data.puzzle) {
                setTimeout(() => this.initPuzzle(mode, data), 50);
            }

            // Visualisierung Hybrid
            if (mode === 'hybrid') {
                const visContainer = document.getElementById('hybrid-visual-content');
                if (visContainer) {
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

            // Schule rendern (NEU)
            if (mode === 'school') {
                this.renderSchool(data);
            }

            // Glossar Logik anhängen
            setTimeout(() => this.attachGlossary(), 100);
        }
    },

    /* --- PUZZLE LOGIC --- */
    initPuzzle: function (mode, data) {
        const pZone = document.getElementById(`puzzle-${mode}`);
        const tBox = document.getElementById(`toolbox-${mode}`);

        if (!pZone || !tBox) return;

        pZone.innerHTML = '';
        tBox.innerHTML = '';

        // Drop Zones (Ziel) erstellen
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

        // Draggables (Quelle) erstellen
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

    handleDrop: function (e, zone) {
        e.preventDefault();
        zone.classList.remove('hovered');

        if (zone.classList.contains('correct')) return;

        const type = e.dataTransfer.getData('type');
        const text = e.dataTransfer.getData('text');

        if (type === zone.dataset.target) {
            zone.innerText = text;
            zone.classList.add('correct');
            const old = document.querySelector('.draggable-item.dragging');
            if (old) old.remove();
        } else {
            zone.style.backgroundColor = '#fce8e6';
            setTimeout(() => zone.style.backgroundColor = 'rgba(255,255,255,0.8)', 500);
        }
    },

    /* --- SIMULATOR --- */
    updateSim: function () {
        const p = parseInt(document.getElementById('sim-params').value);
        const d = parseInt(document.getElementById('sim-data').value);
        const c = parseInt(document.getElementById('sim-compute').value);

        const potential = (p + d) / 2;
        let realized = c >= potential ? potential : c + (potential - c) * 0.1;

        const iqVal = document.getElementById('iq-val');
        const barIq = document.getElementById('bar-iq');
        const barNrg = document.getElementById('bar-nrg');
        const simWarn = document.getElementById('sim-warn');

        if (iqVal) iqVal.innerText = Math.round(realized);
        if (barIq) barIq.style.width = realized + '%';
        if (barNrg) barNrg.style.width = Math.min(c, 100) + '%';

        const badges = ['b1', 'b2', 'b3', 'b4'];
        const thresholds = [10, 40, 70, 90];

        badges.forEach((id, idx) => {
            const el = document.getElementById(id);
            if (el) el.style.display = realized > thresholds[idx] ? 'inline-block' : 'none';
        });

        if (simWarn) simWarn.style.display = (c < potential - 15) ? 'block' : 'none';
    },

    /* --- RENDER HELPER --- */
    renderQuiz: function (mode, questions) {
        const container = document.getElementById(`quiz-${mode}`);
        if (!container) return;
        container.innerHTML = '';

        questions.forEach(q => {
            const el = document.createElement('div');
            el.className = 'quiz-option';
            el.innerText = q.text;
            el.onclick = function () {
                this.style.background = q.correct ? '#e6f4ea' : '#fce8e6';
                this.innerText = q.feedback;
            };
            container.appendChild(el);
        });
    },

    renderMission: function (data) {
        document.getElementById('text-mission-intro').innerHTML = data.intro;

        // 1. Tools rendern
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

        // 2. Tasks rendern
        const taskCont = document.getElementById('mission-tasks');
        taskCont.innerHTML = '';

        data.tasks.forEach((t, i) => {
            let html = `<div class="mission-card">`;

            // Badge nur wenn es kein reiner Info-Schritt ist (wie der Security Check)
            if (!t.isInfo || i > 0) {
                html += `<div class="mission-badge">Schritt ${i + 1}</div>`;
            }

            html += `<h3 style="margin-top:0; color:#333;">${t.title}</h3><p style="line-height:1.6; color:#555;">${t.desc}</p>`;

            // Custom HTML (Tabelle, Security Check, Fazit Box)
            if (t.customHtml) {
                html += t.customHtml;
            }

            // Prompt Box
            if (t.prompt) {
                html += `
                <div class="copy-box">
                    <span id="p-${i}">${t.prompt}</span>
                    <button class="step-btn" onclick="app.copyToClip('p-${i}')">Kopieren</button>
                </div>`;
            }

            // Hinweis "In Tabelle eintragen"
            if (t.prompt) {
                html += `<div style="background:#fff3cd; color:#856404; padding:10px; border-radius:6px; font-size:0.9rem; margin-top:10px; border:1px solid #ffeeba;">
                            ✍️ <strong>Aufgabe:</strong> Kopiere die Antwort (oder eine Zusammenfassung) in deine Tabelle.
                         </div>`;
            }
            html += `</div>`;
            taskCont.innerHTML += html;
        });
    },

    // --- NEU: SCHULE RENDERER ---
    renderSchool: function (data) {
        const grid = document.getElementById('school-prompts-grid');
        if (!grid) return;
        grid.innerHTML = '';

        data.prompts.forEach((p, i) => {
            const html = `
            <div class="prompt-card">
                <h3><span>${p.icon}</span> ${p.subject}</h3>
                <h4 style="margin:10px 0; color:#333; font-size:1rem;">${p.title}</h4>
                <p>${p.desc}</p>
                <div class="copy-box" style="font-size:0.8rem; flex-direction:column; align-items:flex-start; gap:10px;">
                    <span id="sp-${i}" style="width:100%; white-space: pre-wrap;">${p.prompt}</span>
                    <button class="step-btn" style="width:100%; justify-content:center;" onclick="app.copyToClip('sp-${i}')">Kopieren</button>
                </div>
            </div>
            `;
            grid.innerHTML += html;
        });
    },

    /* --- HELPERS --- */
    copyToClip: function (id) {
        navigator.clipboard.writeText(document.getElementById(id).innerText);
        alert('Text kopiert! Füge ihn jetzt bei der KI ein.');
    },

    attachGlossary: function () {
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