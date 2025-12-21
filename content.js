/* CONTENT MODULE 
   Texte & Aufgaben für Klasse 6
   Update: 5-Schritte-Puzzle für Google & KI
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
                    <li>✅ <strong>Wiederholung:</strong> Wie findet Google Webseiten?</li>
                    <li>✅ <strong>Lernen:</strong> Wie lernt eine KI sprechen?</li>
                    <li>✅ <strong>Experimentieren:</strong> Trainiere dein eigenes KI-Modell im Labor.</li>
                    <li>✅ <strong>Mission:</strong> Löse 4 spannende Fälle mit einer echten KI.</li>
                </ul>
                <p style="margin-top: 20px; font-style: italic; color: #666; background: #f0f0f0; padding: 10px; border-radius: 8px;">💡 <strong>Wichtig:</strong> Öffne jetzt <strong>Pages</strong> oder <strong>GoodNotes</strong> auf deinem iPad. Du musst dort gleich Dinge eintragen!</p>
            </div>
            <button class="start-btn" onclick="app.nextStep()">Los geht's!</button>
        `,
        hint: "Lies dir deinen Auftrag durch und klicke dann auf 'Los geht's!'."
    },

    // --- MODUL 1: KLASSISCHE SUCHE (Wiederholung) ---
    google: {
        text: `<h2>Wiederholung: Die Suchmaschine</h2>
               
               <p>Erinnerst du dich an unsere letzte Einheit? Das Internet ist wie eine Bibliothek, in der alle Bücher auf dem Boden liegen. Damit wir etwas finden, muss die Suchmaschine vorher aufräumen.</p>
               
               <h3 style="color:var(--primary)">1. Sammeln (Crawler)</h3>
               <p>Kleine Programme, die <span class="term" data-def="Ein 'Software-Roboter', der Links verfolgt und Webseiten kopiert.">Crawler</span>, reisen Tag und Nacht durchs Netz und kopieren jede Seite, die sie finden.</p>
               
               <h3 style="color:var(--primary)">2. Ordnen (Index)</h3>
               <p>Die Kopien kommen in ein riesiges Verzeichnis, den <span class="term" data-def="Ein gigantisches, sortiertes Verzeichnis aller Wörter im Internet.">Index</span>.</p>

               <h3 style="color:var(--primary)">3. Fragen (Suchanfrage)</h3>
               <p>Der Index ist nutzlos, bis du kommst: Du tippst deine <strong>Suchanfrage</strong> (Keywords) in das Suchfeld ein.</p>
               
               <h3 style="color:var(--primary)">4. Sortieren (Algorithmus)</h3>
               <p>Jetzt erwacht der <span class="term" data-def="Eine strenge Rechenvorschrift, die bestimmt, welches Ergebnis auf Platz 1 kommt.">Algorithmus</span>. Er berechnet blitzschnell, welche der Millionen Seiten am besten zu deinen Wörtern passt.</p>
               
               <h3 style="color:var(--primary)">5. Anzeigen (Snippet)</h3>
               <p>Zum Schluss siehst du die Liste mit der kleinen Textvorschau, dem <span class="term" data-def="Die kleine Textvorschau in der Google-Liste.">Snippet</span>.</p>

               <div style="background: #e8f0fe; padding: 15px; border-radius: 8px; margin-top: 20px; border: 1px solid var(--primary);">
                   <strong>📝 Dein Auftrag für Pages/GoodNotes:</strong><br>
                   Baue das Puzzle rechts. Übertrage den Ablauf dann als kleine Zeichnung oder mit Formen in dein Dokument.
               </div>`,
        // Jetzt 5 Schritte
        puzzle: [
            { label: '1. Sammeln', correct: 'Crawler' },
            { label: '2. Speichern', correct: 'Index' },
            { label: '3. Eingeben', correct: 'Suchanfrage' },
            { label: '4. Sortieren', correct: 'Algorithmus' },
            { label: '5. Anzeigen', correct: 'Snippet' }
        ],
        // Jetzt 5 Items (Suchanfrage ist jetzt ein richtiger Baustein)
        items: [
            { text: '🕷️ Crawler', type: 'Crawler' },
            { text: '📚 Der Index', type: 'Index' },
            { text: '⌨️ Suchanfrage', type: 'Suchanfrage' },
            { text: '🧮 Algorithmus', type: 'Algorithmus' },
            { text: '📝 Snippet', type: 'Snippet' }
        ],
        hint: "Puzzle fertig? Dann zeichne den Ablauf jetzt in dein Dokument (nutze Pfeile und Formen)."
    },

    // --- MODUL 2: KI BASICS 1 (Erweitert) ---
    ai: {
        text: `<h2>Wie funktioniert eine KI?</h2>
               
               

[Image of neural network layers diagram]

               <p>Eine KI (wie ChatGPT) funktioniert ganz anders als eine Suchmaschine. Sie sucht nicht nach fertigen Webseiten. Sie "denkt" sich die Antwort Wort für Wort neu aus.</p>
               
               <h3 class="ai-title">1. Training mit Daten</h3>
               <p>Bevor die KI schlau ist, muss sie trainiert werden. Man füttert sie mit riesigen <strong>Datenmengen</strong> (Bücher, Wikipedia, Internet-Texte). Sie liest quasi das ganze Internet.</p>
               
               <h3 class="ai-title">2. Muster lernen</h3>
               <p>Die KI lernt keine Fakten auswendig wie ein Schüler vor dem Test. Sie lernt <strong>Muster</strong>. Sie lernt, welche Wörter oft zusammengehören (z.B. nach "Guten" kommt oft "Morgen").</p>
               
               <h3 class="ai-title">3. Wahrscheinlichkeit berechnen</h3>
               <p>Wenn du eine Frage stellst, berechnet die KI die <strong>Wahrscheinlichkeit</strong> für das nächste Wort. Sie rät: <em>"Welches Wort passt zu 99% hier hin?"</em>.</p>

               <h3 class="ai-title">4. Antwort generieren</h3>
               <p>Aus den berechneten Wörtern baut sie einen ganzen Satz. Das ist ihre <strong>Antwort</strong> an dich.</p>
               
               <h3 class="ai-title">5. Risiko: Halluzination</h3>
               <p>Weil sie nur rät, kann sie auch Dinge erfinden, die total echt klingen. Das nennt man <strong>Halluzinieren</strong>. Eine Suchmaschine findet, was da ist. Eine KI erfindet, was passen könnte.</p>

               <div style="background: #e8f0fe; padding: 15px; border-radius: 8px; margin-top: 20px; border: 1px solid var(--ai-color);">
                   <strong>📝 Dein Auftrag für Pages/GoodNotes:</strong><br>
                   Schreibe in eigenen Worten: Was ist der Unterschied zwischen <em>Suchen</em> (Google) und <em>Errechnen</em> (KI)?
               </div>`,
        // Jetzt 5 Schritte
        puzzle: [
            { label: '1. Füttern', correct: 'Daten' },
            { label: '2. Verstehen', correct: 'Muster' },
            { label: '3. Raten', correct: 'Wahrscheinlichkeit' },
            { label: '4. Ausgabe', correct: 'Antwort' },
            { label: '5. Risiko', correct: 'Halluzination' }
        ],
        // Items angepasst (Bewusstsein raus, Antwort rein)
        items: [
            { text: '🌍 Datenmengen', type: 'Daten' },
            { text: '🧠 Muster', type: 'Muster' },
            { text: '🎲 Wahrscheinlichkeit', type: 'Wahrscheinlichkeit' },
            { text: '💬 Antwort', type: 'Antwort' },
            { text: '👻 Halluzination', type: 'Halluzination' }
        ],
        hint: "Löse das Puzzle. Erkläre dann in deinem Dokument den Unterschied zwischen Suche und KI."
    },

// --- MODUL 3: KI BASICS 2 (LABOR) ---
lab: {
    type: 'html-insert',
    targetId: 'lab-intro-text',
    content: `
         

        <h3>Warum sind KIs plötzlich so schlau? 🤯</h3>
        <p>Vor ein paar Jahren waren Computer noch ziemlich "dumm". Sie konnten nicht mal einen Witz erzählen. Warum sind sie heute plötzlich so schlau wie Einstein?</p>
        <p>Das Zauberwort heißt <strong>Scaling</strong>. Das ist Informatiker-Sprache für: <em>"Wir machen alles extrem riesig!"</em></p>
        
        <p>Damit eine KI super-schlau wird, musst du im Labor die perfekte Mischung aus 3 Zutaten finden:</p>
        
        <div style="background:#f0f4f8; padding:15px; border-radius:10px; margin-bottom:15px;">
            <strong>🧠 1. Die Gehirn-Größe (Parameter)</strong><br>
            Stell dir vor, dein Gehirn wäre so klein wie eine Erdnuss. Du könntest dir kaum etwas merken. Eine moderne KI hat ein "Gehirn" mit Milliarden von Verbindungen.
            <br><em>Problem:</em> Ein riesiges Gehirn bringt nichts, wenn es leer ist!
        </div>

        <div style="background:#fff3e0; padding:15px; border-radius:10px; margin-bottom:15px;">
            <strong>📚 2. Das Futter (Daten)</strong><br>
            Die KI muss lesen, um zu lernen. Wenn du sie nur mit "SpongeBob"-Folgen fütterst, wird sie auf jede Mathe-Frage antworten: <em>"Ist hier die Krosse Krabbe?"</em> 🦀<br>
            Damit sie schlau wird, muss sie <strong>alles</strong> lesen: Wikipedia, Bücher, Nachrichten, Programmier-Code.
        </div>

        <div style="background:#e0f2f1; padding:15px; border-radius:10px; margin-bottom:15px;">
            <strong>⚡ 3. Die Muckis (Compute / Energie)</strong><br>
            Das ganze Internet zu lesen, ist anstrengend! Das schafft kein normales Handy. Dafür braucht man riesige Hallen voller Super-Computer und extrem viel Strom.<br>
            Ohne Strom "schläft" auch das größte Gehirn ein.
        </div>

        <p><strong>👨‍🔬 Dein Experiment:</strong><br>
        Schiebe die Regler unten! Versuche, den IQ auf 100% zu bringen. Aber pass auf: Was passiert, wenn du der KI zwar viele Bücher gibst, aber ihr Gehirn winzig klein lässt?</p>

        <div style="background: #e8f0fe; padding: 15px; border-radius: 8px; margin-top: 20px; border: 1px solid var(--primary);">
            <strong>📝 Dein Auftrag für Pages/GoodNotes:</strong><br>
            Spiele mit den Reglern. Beschreibe dann eine Situation, in der die KI <strong>"dumm"</strong> bleibt, obwohl du einen Regler ganz nach oben geschoben hast. Woran lag es?
        </div>
    `,
    hint: "Teste alle Regler! Was passiert, wenn du viel Wissen (Daten) hast, aber ein kleines Gehirn?"
},

    // --- MODUL 4: HYBRID ---
    hybrid: {
        text: `<h2>Hybrid: Suchmaschine + KI</h2>
                
               <p>Suchmaschinen ändern sich gerade gewaltig. Früher gab es nur 10 blaue Links. Heute gibt es oft <strong>KI-Antworten</strong> direkt ganz oben (Google nennt das "AI Overviews").</p>
               
               <div class="hybrid-box">
                   <h3 style="margin-top:0; color:#e37400;">Der neue Mix</h3>
                   <p>Moderne Suchmaschinen verbinden beides:</p>
                   <ol>
                       <li>Erst sucht die klassische Suchmaschine die besten <strong>Fakten</strong> (Webseiten).</li>
                       <li>Dann liest eine KI diese Seiten blitzschnell durch.</li>
                       <li>Zum Schluss schreibt die KI eine <strong>Zusammenfassung</strong> für dich.</li>
                   </ol>
               </div>
               
               <h3>Das Gute & Das Schlechte</h3>
               <ul style="line-height: 1.6;">
                   <li>✅ <strong>Zeit-Sparer:</strong> Du musst nicht 5 verschiedene Webseiten öffnen. Die KI fasst alles in einem Text zusammen.</li>
                   <li>✅ <strong>Verständlichkeit:</strong> Die KI kann komplizierte Experten-Texte in einfache Sprache übersetzen.</li>
                   <hr style="border:0; border-top:1px dashed #ccc; margin:10px 0;">
                   <li>❌ <strong>"Stille Post"-Effekt:</strong> Wenn die KI den Text auf der Webseite falsch versteht, erzählt sie dir Quatsch, obwohl die Quelle eigentlich richtig war.</li>
                   <li>❌ <strong>Quellen-Blindheit:</strong> Man vergisst leicht, zu prüfen, <em>wer</em> das eigentlich geschrieben hat. War das ein Professor oder irgendein Quatschkopf?</li>
                   <li>❌ <strong>Strom-Hunger:</strong> Erinnere dich an das Labor! Eine KI-Antwort verbraucht ca. 10-mal mehr Strom als eine normale Suche.</li>
               </ul>

               <div style="background: #e8f0fe; padding: 15px; border-radius: 8px; margin-top: 20px; border: 1px solid #fbbc04;">
                   <strong>📝 Dein Auftrag für Pages/GoodNotes:</strong><br>
                   Wähle je einen Vorteil (✅) und einen Nachteil (❌) aus, die du am wichtigsten findest. Notiere sie in deinem Dokument.
               </div>`,
        quiz: [
            { text: 'Vorteil: Man spart Zeit, weil man nicht alles selbst lesen muss.', correct: true, feedback: '✅ Richtig! Das ist der Hauptgrund für KI-Suche.' },
            { text: 'Nachteil: Man prüft nicht mehr, wer die Info geschrieben hat.', correct: true, feedback: '✅ Genau! Das nennt man "Quellen-Blindheit".' },
            { text: 'Vorteil: Die KI kann komplizierte Texte einfach erklären.', correct: true, feedback: '✅ Stimmt! Sie ist wie ein Übersetzer.' },
            { text: 'Die KI verbraucht viel weniger Strom als Google.', correct: false, feedback: '❌ Falsch. KI braucht riesige Rechenzentren (siehe Labor).' }
        ],
        hint: "Mache den Wissens-Check. Notiere dann Vor- und Nachteile in deinem Dokument."
    },

    // --- MODUL 5: MISSION ---
    mission: {
        intro: `
            <h1 style="color: var(--mission-color);">🕵️‍♂️ Mission: Der KI-Detektiv</h1>
            <p>Du weißt jetzt alles über KI. Jetzt wird es Zeit, das Gelernte zu testen!<br>
            Wähle eine KI und löse die 4 Fälle. <strong>Schreibe die Antworten in dein Pages/GoodNotes Dokument!</strong></p>
        `,
        tools: [
            { name: 'ChatGPT', icon: '🟢', url: 'https://chatgpt.com', sub: 'Der Bekannteste' },
            { name: 'Grok', icon: '🌌', url: 'https://grok.com', sub: 'Die neue KI (xAI)' },
            { name: 'Gemini', icon: '⭐', url: 'https://gemini.google.com', sub: 'Von Google' },
            { name: 'Perplexity', icon: '🧠', url: 'https://www.perplexity.ai', sub: 'Die Antwort-Maschine' }
        ],
        tasks: [
            {
                title: 'Fall 1: Der Halluzinations-Test',
                desc: 'KIs können lügen. Teste es mit einem Land, das es gar nicht gibt!',
                prompt: 'Nenne mir 3 berühmte Sehenswürdigkeiten im Land "Atlantis-Oberhausen".',
                placeholder: ''
            },
            {
                title: 'Fall 2: Der Kreativ-Modus',
                desc: 'Google findet Fakten, aber KI kann kreativ sein. Lass uns den Stil ändern.',
                prompt: 'Erkläre mir Photosynthese in Jugendsprache mit vielen Emojis. Tu so, als wärst du ein Rapper.',
                placeholder: ''
            },
            {
                title: 'Fall 3: Meinung vs. Fakt',
                desc: 'Hat eine KI einen eigenen Geschmack? Frage sie nach ihrer Meinung.',
                prompt: 'Welcher ist der beste Fußballverein der Welt und warum?',
                placeholder: ''
            },
            {
                title: 'Fall 4: Mathe-Genie?',
                desc: 'KIs sind Sprach-Modelle, keine Taschenrechner. Können sie logisch denken?',
                prompt: 'Ich habe 3 Äpfel. Gestern habe ich einen gegessen. Wie viele Äpfel habe ich heute?',
                placeholder: ''
            },
            {
                title: 'Abschluss-Bericht (Note)',
                desc: 'Öffne dein Dokument <strong>"KI-Führerschein"</strong> in Pages/GoodNotes.<br>1. Kopiere deine Ergebnisse aus Fall 1-4 hinein.<br>2. Schreibe ein Fazit: <em>"Ich vertraue einer KI, wenn..., aber ich passe auf, wenn..."</em>',
                isInfo: true
            }
        ],
        hint: "Glückwunsch! Wenn du alle 4 Fälle in deinem Dokument notiert hast, zeige es deinem Lehrer."
    }
};