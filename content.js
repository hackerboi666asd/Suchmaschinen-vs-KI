/* CONTENT MODULE 
   Kindgerechte Texte für 6. Klasse (11-12 Jahre)
   Aufgaben auf Pages/GoodNotes umgestellt.
*/

const modules = {
    // --- START SEITE ---
    start: {
        type: 'html-insert',
        targetId: 'content-start',
        content: `
            <div class="hero-icon">🕵️‍♂️🔎🤖</div>
            <h1 style="font-size: 2.5rem; color: var(--primary);">Bist du bereit, KI-Detektiv?</h1>
            <p style="font-size: 1.2rem; color: #555; margin-bottom: 40px; line-height: 1.6;">
                Du benutzt bestimmt oft Suchmaschinen wie Google. Aber hast du schon mal mit einer <strong>Künstlichen Intelligenz (KI)</strong> gesprochen?<br>
                Heute finden wir heraus: Was ist der Unterschied? Und wer ist schlauer?
            </p>
            <div style="text-align: left; background: #fff; padding: 30px; border-radius: 12px; margin-bottom: 30px; border: 1px solid #e0e0e0; box-shadow: 0 5px 15px rgba(0,0,0,0.03);">
                <h3 style="margin-top:0;">Dein Detektiv-Auftrag heute:</h3>
                <ul style="line-height: 2; font-size: 1.1rem;">
                    <li>✅ <strong>Verstehen:</strong> Wie findet Google Webseiten?</li>
                    <li>✅ <strong>Lernen:</strong> Wie lernt eine KI sprechen?</li>
                    <li>✅ <strong>Experimentieren:</strong> Trainiere dein eigenes KI-Modell im Labor.</li>
                    <li>✅ <strong>Mission:</strong> Löse 3 spannende Fälle mit einer echten KI.</li>
                </ul>
                <p style="margin-top: 20px; font-style: italic; color: #666;">💡 Halte dein iPad bereit! Du brauchst später <strong>Pages</strong> oder <strong>GoodNotes</strong>.</p>
            </div>
            <button class="start-btn" onclick="app.nextStep()">Los geht's!</button>
        `,
        hint: "Lies dir deinen Auftrag durch und klicke dann auf 'Los geht's!'."
    },

    // --- MODUL 1: KLASSISCHE SUCHE ---
    google: {
        text: `<h2>Wie funktioniert eine Suchmaschine?</h2>
               
               <p>Stell dir das Internet wie eine gigantische Bibliothek vor. Aber die Bücher (Webseiten) liegen alle durcheinander auf dem Boden. Wie findet man da was?</p>
               
               <h3 style="color:var(--primary)">1. Der Crawler (Der Sammler)</h3>
               <p>Eine Suchmaschine schickt kleine Programme los, die <span class="term" data-def="Ein 'Software-Roboter', der Links verfolgt und Webseiten kopiert.">Crawler</span> heißen. Sie rennen Tag und Nacht durchs Internet, lesen jede Webseite und speichern eine Kopie.</p>
               
               <h3 style="color:var(--primary)">2. Der Index (Der Katalog)</h3>
               <p>Alle gesammelten Infos kommen in ein riesiges Inhaltsverzeichnis, den <span class="term" data-def="Ein gigantisches, sortiertes Verzeichnis aller Wörter im Internet.">Index</span>. Wenn du suchst, schaut der Computer nur in diesen Index, nicht ins echte Internet – das geht viel schneller!</p>
               
               <h3 style="color:var(--primary)">3. Der Algorithmus (Der Chef)</h3>
               <p>Wenn du "Pferde" suchst, gibt es Millionen Treffer. Ein <span class="term" data-def="Eine strenge Rechenvorschrift, die bestimmt, welches Ergebnis auf Platz 1 kommt.">Algorithmus</span> berechnet blitzschnell, welche Seite die beste ist (z.B. weil viele andere Seiten darauf verlinken).</p>`,
        puzzle: [
            { label: '1. Sammeln', correct: 'Crawler' },
            { label: '2. Speichern', correct: 'Index' },
            { label: '3. Sortieren', correct: 'Algorithmus' },
            { label: '4. Anzeigen', correct: 'Snippet' }
        ],
        items: [
            { text: '🕷️ Crawler', type: 'Crawler' },
            { text: '📚 Der Index', type: 'Index' },
            { text: '🧮 Algorithmus', type: 'Algorithmus' },
            { text: '📝 Ergebnis-Text', type: 'Snippet' },
            { text: '⌨️ Deine Frage', type: 'distractor' }
        ],
        hint: "👉 <strong>Aufgabe:</strong> Löse das Puzzle. Öffne dann <strong>Pages/GoodNotes</strong>. Schreibe in eigenen Worten: Warum muss eine Suchmaschine das Internet kopieren (Index)?"
    },

    // --- MODUL 2: KI BASICS 1 ---
    ai: {
        text: `<h2>Wie funktioniert eine KI? (Teil 1)</h2>
               
               <p>Eine KI (wie ChatGPT) funktioniert ganz anders als eine Suchmaschine. Sie sucht nicht nach Webseiten. Sie ist eher wie ein extrem gut trainierter <strong>Papagei</strong>.</p>
               
               <h3 class="ai-title">1. Das Training (Lesen, lesen, lesen)</h3>
               <p>Bevor die KI mit dir sprechen kann, muss sie "in die Schule". Man füttert sie mit fast allem, was im Internet steht. Sie lernt dabei keine Fakten auswendig, sondern <span class="term" data-def="Regeln, welche Wörter oft zusammen vorkommen.">Muster</span>.</p>
               
               <h3 class="ai-title">2. Die Vorhersage (Raten)</h3>
               <p>Wenn du "Guten" sagst, weiß die KI, dass danach oft "Morgen" oder "Tag" kommt. Sie versteht nicht wirklich, was sie sagt. Sie berechnet nur Wort für Wort: <em>"Welches Wort passt am besten als nächstes?"</em></p>
               
               <h3 class="ai-title">3. Achtung: Halluzination!</h3>
               <p>Weil die KI die Antwort "errechnet" und nicht nachschlägt, kann sie Dinge erfinden. Wenn sie etwas nicht weiß, rät sie einfach. Das nennt man <span class="term" data-def="Wenn eine KI überzeugend lügt oder Quatsch erzählt.">Halluzinieren</span>.</p>`,
        puzzle: [
            { label: '1. Lernen', correct: 'Daten' },
            { label: '2. Eingabe', correct: 'Prompt' },
            { label: '3. Rechnen', correct: 'Muster' },
            { label: '4. Antwort', correct: 'Generierung' }
        ],
        items: [
            { text: '🌍 Datenmengen', type: 'Daten' },
            { text: '💬 Dein Befehl', type: 'Prompt' },
            { text: '🧠 Mustererkennung', type: 'Muster' },
            { text: '✍️ Text schreiben', type: 'Generierung' },
            { text: '🧐 Bewusstsein', type: 'distractor' }
        ],
        hint: "👉 <strong>Aufgabe:</strong> Löse das Puzzle. Schreibe dann in <strong>Pages/GoodNotes</strong>: Was ist der Unterschied zwischen <em>Suchen</em> (Google) und <em>Errechnen</em> (KI)?"
    },

    // --- MODUL 3: KI BASICS 2 (LABOR) ---
    lab: {
        type: 'html-insert',
        targetId: 'lab-intro-text',
        content: `
            

[Image of neural network training diagram]

            <p>Du fragst dich vielleicht: "Warum ist die KI erst jetzt so schlau geworden?"<br>
            Das Geheimnis heißt <strong>Scaling</strong> (Skalieren). Das bedeutet: Wir machen alles viel, viel größer!</p>
            <p>Damit eine KI wirklich schlau wirkt, braucht sie drei Dinge gleichzeitig:</p>
            <ul>
                <li>🧠 <strong>Ein riesiges Gehirn:</strong> Viele Parameter (digitale Nervenzellen).</li>
                <li>📚 <strong>Viel Wissen:</strong> Unmengen an Trainings-Daten (Bücher, Wikipedia).</li>
                <li>⚡ <strong>Viel Power:</strong> Supercomputer, die Tag und Nacht rechnen (Compute).</li>
            </ul>
        `,
        hint: "👉 <strong>Aufgabe:</strong> Schiebe die Regler! Was passiert, wenn du das Gehirn riesig machst, aber zu wenig Strom (Power) hast?"
    },

    // --- MODUL 4: HYBRID ---
    hybrid: {
        text: `<h2>Hybrid: Suchmaschine + KI</h2>
               
               <p>Vielleicht hast du es schon bemerkt: Suchmaschinen verändern sich. Früher bekamst du nur eine Liste mit 10 blauen Links. Heute bekommst du oft direkt eine fertige Antwort.</p>
               
               <div class="hybrid-box">
                   <h3 style="margin-top:0; color:#e37400;">Der neue Mix</h3>
                   <p>Moderne Suchmaschinen verbinden beides:</p>
                   <ol>
                       <li>Erst sucht die klassische Suchmaschine die besten <strong>Fakten</strong> (Webseiten).</li>
                       <li>Dann liest eine KI diese Seiten blitzschnell durch.</li>
                       <li>Zum Schluss schreibt die KI eine <strong>Zusammenfassung</strong> für dich.</li>
                   </ol>
               </div>
               
               <h3>Vor- und Nachteile</h3>
               <ul>
                   <li>✅ <strong>Super schnell:</strong> Du musst keine langen Texte mehr lesen.</li>
                   <li>❌ <strong>Stille Post:</strong> Wenn die KI den Text auf der Webseite falsch versteht, erzählt sie dir Quatsch, obwohl die Quelle richtig war.</li>
               </ul>`,
        quiz: [
            { text: 'Vorteil: Man muss nicht mehr so viele Links anklicken.', correct: true, feedback: '✅ Richtig! Das spart Zeit.' },
            { text: 'Nachteil: Die KI kann den Inhalt von Webseiten falsch zusammenfassen.', correct: true, feedback: '✅ Genau! Das ist das Risiko "Stille Post".' },
            { text: 'Die KI weiß immer alles besser als die Webseiten.', correct: false, feedback: '❌ Falsch. Die KI fasst nur zusammen, was sie findet.' }
        ],
        hint: "👉 <strong>Aufgabe:</strong> Mache den Wissens-Check. Schreibe in <strong>Pages/GoodNotes</strong>: Welchen Vorteil und welchen Nachteil hat die neue Hybrid-Suche?"
    },

    // --- MODUL 5: MISSION ---
    mission: {
        intro: `
            <h1 style="color: var(--mission-color);">🕵️‍♂️ Mission: Der KI-Detektiv</h1>
            <p>Du weißt jetzt alles über KI. Jetzt wird es Zeit, das Gelernte zu testen!<br>
            Benutze eine echte KI, um die folgenden Fälle zu lösen.</p>
        `,
        tools: [
            { name: 'ChatGPT', icon: '🟢', url: 'https://chatgpt.com', sub: 'Der Bekannteste' },
            { name: 'Kopilot', icon: '🔵', url: 'https://copilot.microsoft.com', sub: 'Von Microsoft' },
            { name: 'Gemini', icon: '⭐', url: 'https://gemini.google.com', sub: 'Von Google' },
            { name: 'Perplexity', icon: '🧠', url: 'https://www.perplexity.ai', sub: 'Die Antwort-Maschine' }
        ],
        tasks: [
            {
                title: 'Fall 1: Der Halluzinations-Test',
                desc: 'Erinnerst du dich? KIs "würfeln" Wörter und können lügen. Teste es mit einem Land, das es gar nicht gibt!',
                prompt: 'Nenne mir 3 berühmte Sehenswürdigkeiten im Land "Atlantis-Oberhausen".',
                placeholder: 'Was antwortet die KI? Glaubt sie es oder merkt sie den Trick?'
            },
            {
                title: 'Fall 2: Der Kreativ-Modus',
                desc: 'Google findet Fakten, aber KI kann kreativ sein. Lass uns den Stil ändern.',
                prompt: 'Erkläre mir Photosynthese in Jugendsprache mit vielen Emojis. Tu so, als wärst du ein Rapper.',
                placeholder: 'Kopiere hier den lustigsten Satz rein...'
            },
            {
                title: 'Abschluss-Bericht (Note)',
                desc: 'Öffne dein Dokument <strong>"KI-Führerschein"</strong> in Pages/GoodNotes.<br>1. Kopiere deine Ergebnisse aus Fall 1 & 2 hinein.<br>2. Schreibe ein Fazit: <em>"Ich vertraue einer KI, wenn..., aber ich passe auf, wenn..."</em>',
                isInfo: true
            }
        ],
        hint: "Viel Erfolg bei deiner Mission! Wenn du fertig bist, zeige dein Pages-Dokument deinem Lehrer."
    }
};