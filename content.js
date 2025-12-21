/* CONTENT MODULE 
   Hier stehen alle Texte, Puzzle-Daten und Aufgaben.
   Wenn du eine neue Seite hinzufügen willst, erstelle einen neuen Key im 'modules'-Objekt.
*/

const modules = {
    // --- START SEITE ---
    start: {
        type: 'html-insert',
        targetId: 'content-start',
        content: `
            <div class="hero-icon">🕵️‍♂️🔎🤖</div>
            <h1 style="font-size: 2.5rem; color: var(--primary);">Bist du bereit?</h1>
            <p style="font-size: 1.2rem; color: #555; margin-bottom: 40px;">
                Wir nutzen sie jeden Tag: <strong>Suchmaschinen</strong>. Aber plötzlich reden alle von <strong>Künstlicher Intelligenz (KI)</strong>.<br>
                Was ist der Unterschied? Und wie nutzt man beides richtig?
            </p>
            <div style="text-align: left; background: #f8f9fa; padding: 25px; border-radius: 12px; margin-bottom: 30px; border: 1px solid #eee;">
                <h3>Dein Auftrag heute:</h3>
                <ul style="line-height: 1.8;">
                    <li>✅ <strong>Verstehe:</strong> Wie Google wirklich funktioniert (Crawler & Index).</li>
                    <li>✅ <strong>Lerne:</strong> Wie KI (ChatGPT & Co) "denkt" und trainiert wird.</li>
                    <li>✅ <strong>Teste:</strong> Experimentiere im KI-Simulator.</li>
                    <li>✅ <strong>Wende an:</strong> Löse 3 Missionen als KI-Detektiv.</li>
                </ul>
            </div>
            <button class="start-btn" onclick="app.nextStep()">Los geht's!</button>
        `,
        hint: "Willkommen! Lies die Einleitung."
    },

    // --- MODUL 1: GOOGLE ---
    google: {
        text: `<h2>Wie funktioniert Google?</h2>
               
               <p>Google hat das Internet schon <em>vorher</em> gelesen. Das passiert in 4 Schritten:</p>
               <h3>1. Crawler (Die Spinne)</h3>
               <p>Ein Programm reist von Link zu Link und kopiert Webseiten.</p>
               <h3>2. Index (Das Buch)</h3>
               <p>Alle Kopien landen in einem riesigen Verzeichnis.</p>
               <h3>3. Ranking (Der Chef)</h3>
               <p>Wenn du suchst, sortiert ein <span class="term" data-def="Rechenvorschrift">Algorithmus</span> die Ergebnisse.</p>
               <h3>4. Snippet (Die Vorschau)</h3>
               <p>Das kleine Textstück, das du in der Ergebnisliste siehst.</p>`,
        puzzle: [
            { label: '1. Sammeln', correct: 'Crawler' },
            { label: '2. Speichern', correct: 'Index' },
            { label: '3. Sortieren', correct: 'Algorithmus' },
            { label: '4. Anzeigen', correct: 'Snippet' }
        ],
        items: [
            { text: '🕷️ Crawler', type: 'Crawler' },
            { text: '📚 Index', type: 'Index' },
            { text: '🧮 Algorithmus', type: 'Algorithmus' },
            { text: '📝 Snippet', type: 'Snippet' },
            { text: '⌨️ Suchanfrage', type: 'distractor' }
        ],
        hint: "Aufgabe: Ziehe die Bausteine in die richtige Reihenfolge (1-4). Achtung: Ein Baustein ist falsch!"
    },

    // --- MODUL 2: KI BASICS ---
    ai: {
        text: `<h2>Wie funktioniert KI?</h2>
               
               <p>ChatGPT ist keine Suchmaschine. Es ist eine Text-Maschine.</p>
               <h3>1. Training</h3>
               <p>Die KI liest monatelang Texte. Sie lernt keine Fakten auswendig, sondern <span class="term" data-def="Regelmäßigkeiten in der Sprache">Muster</span>.</p>
               <h3>2. Wahrscheinlichkeit</h3>
               <p>Wenn du fragst, berechnet sie Wort für Wort: Welches Wort kommt als nächstes?</p>
               <h3>3. Halluzination</h3>
               <p>Weil sie nur rät ("würfelt"), kann sie überzeugend lügen.</p>`,
        puzzle: [
            { label: '1. Lernen', correct: 'Daten' },
            { label: '2. Eingabe', correct: 'Prompt' },
            { label: '3. Rechnen', correct: 'Muster' },
            { label: '4. Ausgabe', correct: 'Generierung' }
        ],
        items: [
            { text: '🌍 Datenmengen', type: 'Daten' },
            { text: '💬 Prompt', type: 'Prompt' },
            { text: '🧠 Mustererkennung', type: 'Muster' },
            { text: '✍️ Generierung', type: 'Generierung' },
            { text: '🧐 Bewusstsein', type: 'distractor' }
        ],
        hint: "Aufgabe: Baue den Ablauf einer KI nach. Hat eine KI ein Bewusstsein? (Tipp: Nein)"
    },

    // --- MODUL 3: LAB (TEXTE) ---
    lab: {
        type: 'html-insert',
        targetId: 'lab-intro-text',
        content: `
             

[Image of neural network training diagram]

            <p>Damit eine KI schlau wird, muss man sie "skalieren" (größer machen). Es braucht 3 Zutaten:</p>
            <ul>
                <li>🧠 <strong>Gehirn (Parameter)</strong></li>
                <li>📚 <strong>Wissen (Daten)</strong></li>
                <li>⚡ <strong>Energie (Compute)</strong></li>
            </ul>
            <p><strong>Aufgabe:</strong> Schiebe die Regler unten. Was passiert, wenn du viel Gehirn aber wenig Strom hast?</p>
        `,
        hint: "Experimentiere mit den Reglern. Versuche den IQ auf 100% zu bringen."
    },

    // --- MODUL 4: HYBRID ---
    hybrid: {
        text: `<h2>Die neue Ära: Google + KI</h2>
                
               <p>Suchmaschinen ändern sich gerade gewaltig. Früher gab es nur 10 blaue Links. Heute gibt es <strong>KI-Antworten</strong> direkt über den Links.</p>
               <div class="hybrid-box">
                   <h3 style="margin-top:0; color:#e37400;">Der Hybrid-Ansatz</h3>
                   <p>Google nennt das "SGE" oder "AI Overviews".</p>
                   <ol>
                       <li><strong>Klassisch:</strong> Google sucht erst wie früher nach relevanten Webseiten (Index).</li>
                       <li><strong>Modern:</strong> Eine KI liest diese Ergebnisse blitzschnell.</li>
                       <li><strong>Ergebnis:</strong> Die KI schreibt dir eine Zusammenfassung. Du musst nicht mehr jeden Link anklicken!</li>
                   </ol>
               </div>
               <p><strong>Vorteil:</strong> Geht viel schneller.<br><strong>Nachteil:</strong> Wenn die KI die Webseiten falsch versteht, steht im Ergebnis Quatsch.</p>`,
        quiz: [
            { text: 'Damit man nicht mehr so viele Links klicken muss.', correct: true, feedback: '✅ Richtig! Damit Nutzer schneller Antworten bekommen.' },
            { text: 'Weil Google Strom sparen will.', correct: false, feedback: '❌ Falsch. Das kostet Google sogar mehr Strom.' }
        ],
        hint: "Lies den Text und mache den Wissens-Check rechts."
    },

    // --- MODUL 5: MISSION ---
    mission: {
        intro: `
            <h1 style="color: var(--mission-color);">🕵️‍♂️ Mission: Der KI-Detektiv</h1>
            <p>Jetzt bist du dran. Wähle eine KI aus und löse die Fälle!</p>
        `,
        tools: [
            { name: 'ChatGPT', icon: '🟢', url: 'https://chatgpt.com', sub: 'Der Bekannteste (OpenAI)' },
            { name: 'Google Gemini', icon: '⭐', url: 'https://gemini.google.com', sub: 'Mit Google-Suche verbunden' },
            { name: 'Perplexity', icon: '🧠', url: 'https://www.perplexity.ai', sub: 'Die Antwort-Maschine' },
            { name: 'Copilot', icon: '🔵', url: 'https://copilot.microsoft.com', sub: 'Microsoft (nutzt GPT-4)' }
        ],
        tasks: [
            {
                title: 'Fall 1: Halluzinations-Test',
                desc: 'Lügt die KI oder gibt sie zu, dass sie etwas nicht weiß?',
                prompt: 'Nenne mir 3 Sehenswürdigkeiten im Land "Atlantis-Oberhausen".',
                placeholder: 'Antwort der KI...'
            },
            {
                title: 'Fall 2: Kreativ-Modus',
                desc: 'Lass die KI etwas tun, was Google nicht kann: Stil ändern.',
                prompt: 'Erkläre Photosynthese in Jugendsprache mit Emojis. Erwähne einen Rapper.',
                placeholder: 'Lustigstes Zitat einfügen...'
            },
            {
                title: 'Abschluss',
                desc: 'Öffne <strong>Pages/Word</strong>. Erstelle ein Dokument "KI-Führerschein". Kopiere deine Ergebnisse aus Fall 1 & 2 dort hinein und schreibe ein Fazit.',
                prompt: '',
                isInfo: true
            }
        ],
        hint: "Das Finale! Löse die Fälle."
    }
};