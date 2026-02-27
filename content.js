/* CONTENT MODULE 
   Texte & Aufgaben für Klasse 6
   Update: Sicherheits-Check, KI-Spiel, Schul-Prompts
*/

const modules = {
    // --- START SEITE ---
    start: {
        type: 'html-insert',
        targetId: 'content-start',
        content: `
            <div class="hero-icon">🕵️‍♂️🔎🤖</div>
            <h1 style="font-size: 2.5rem; color: var(--primary);">Bist du bereit, Künstliche Intelligenz (KI) kennenzulernen?</h1>
            <p style="font-size: 1.2rem; color: #555; margin-bottom: 40px; line-height: 1.6;">
                Du benutzt bestimmt oft Suchmaschinen wie Google. Aber hast du schon mal mit einer <strong>Künstlichen Intelligenz (KI)</strong> gesprochen?<br>
                Heute finden wir heraus: Was ist der Unterschied? Und wer ist schlauer?
            </p>
            <div style="text-align: left; background: #fff; padding: 30px; border-radius: 12px; margin-bottom: 30px; border: 1px solid #e0e0e0; box-shadow: 0 5px 15px rgba(0,0,0,0.03);">
                <h3 style="margin-top:0;">Dein Auftrag:</h3>
                <ul style="line-height: 2; font-size: 1.1rem;">
                    <li>✅ <strong>Wiederholung:</strong> Wie funktioniert eine Suchmaschine?</li>
                    <li>✅ <strong>Lernen:</strong> Wie lernt eine KI und gibt Antworten?</li>
                    <li>✅ <strong>Experimentieren:</strong> Trainiere dein eigenes KI-Modell im Labor.</li>
                    <li>✅ <strong>Mission:</strong> Löse 5 spannende Fälle im großen Vergleichstest.</li>
                    <li>✅ <strong>Bonus:</strong> Lerne, wie KI dir bei Hausaufgaben hilft (ohne zu schummeln!).</li>
                </ul>
                <p style="margin-top: 20px; font-style: italic; color: #666; background: #f0f0f0; padding: 10px; border-radius: 8px;">💡 <strong>Wichtig:</strong> Öffne jetzt <strong>Pages</strong> oder <strong>GoodNotes</strong> auf deinem iPad. Du musst dort gleich Dinge eintragen!</p>
            </div>
            <button class="start-btn" onclick="app.nextStep()">Los geht's!</button>
        `,
        hint: "Lies dir deinen Auftrag durch und klicke dann auf 'Los geht's!'."
    },

    // --- MODUL 1: KLASSISCHE SUCHE ---
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
                   Baue das Puzzle rechts. Mache dann davon einen Screenshot und füge ihn in dein Dokument.
               </div>`,
        puzzle: [
            { label: '1. Sammeln', correct: 'Crawler' },
            { label: '2. Speichern', correct: 'Index' },
            { label: '3. Eingeben', correct: 'Suchanfrage' },
            { label: '4. Sortieren', correct: 'Algorithmus' },
            { label: '5. Anzeigen', correct: 'Snippet' }
        ],
        items: [
            { text: '🕷️ Crawler', type: 'Crawler' },
            { text: '📚 Der Index', type: 'Index' },
            { text: '⌨️ Suchanfrage', type: 'Suchanfrage' },
            { text: '🧮 Algorithmus', type: 'Algorithmus' },
            { text: '📝 Snippet', type: 'Snippet' }
        ],
        hint: "Ziehe die Bausteine von oben nach unten in die richtigen Felder! Zeichne danach den Ablauf ab."
    },

    // --- MODUL 2: KI BASICS 1 ---
    ai: {
        text: `<h2>Wie funktioniert eine KI?</h2>
               
               <p>Eine KI (wie ChatGPT) funktioniert ganz anders als eine Suchmaschine. Sie sucht nicht nach fertigen Webseiten. Sie "denkt" sich die Antwort Wort für Wort neu aus.</p>
               
               
               <h3 class="ai-title">1. Training mit Daten</h3>
               <p>Bevor die KI schlau ist, muss sie trainiert werden. Man füttert sie mit riesigen <strong>Datenmengen</strong> (Bücher, Wikipedia, Internet-Texte).</p>
               
               <h3 class="ai-title">2. Muster lernen</h3>
               <p>Die KI lernt keine Fakten auswendig wie ein Schüler vor dem Test. Sie lernt <strong>Muster</strong>, zum Beispiel das nach dem Wort "Guten" oft "Morgen" kommt.</p>
               
               <h3 class="ai-title">3. Wahrscheinlichkeit berechnen</h3>
               <p>Wenn du eine Frage stellst, berechnet die KI die <strong>Wahrscheinlichkeit</strong> für das nächste Wort. Sie rät: <em>"Welches Wort passt zu 99% hier hin?"</em>.</p>

               <div style="background:#fff; border:2px solid #ccc; padding:15px; border-radius:8px; margin:20px 0; box-shadow:0 2px 5px rgba(0,0,0,0.05);">
                    <h4 style="margin-top:0;">🎮 Mini-Spiel: Sei die KI!</h4>
                    <p style="margin-bottom:10px;">Die KI sieht den Satzanfang: <em>"Die Maus frisst den..."</em><br>
                    Welches Wort kommt wahrscheinlich als nächstes?</p>
                    <button onclick="alert('❌ Unwahrscheinlich (0.01%). Warum sollte sie den Mond fressen?')" style="margin:5px; padding:5px 10px; cursor:pointer;">Mond 🌑</button>
                    <button onclick="alert('✅ Sehr wahrscheinlich (95%)! Das würde die KI wählen.')" style="margin:5px; padding:5px 10px; cursor:pointer;">Käse 🧀</button>
                    <button onclick="alert('⚠️ Möglich, aber seltener (4%). Vielleicht in einem Cartoon?')" style="margin:5px; padding:5px 10px; cursor:pointer;">Teppich 🧶</button>
               </div>

               <h3 class="ai-title">4. Antwort generieren</h3>
               <p>Aus den berechneten Wörtern baut sie einen ganzen Satz. Das ist ihre <strong>Antwort</strong> an dich.</p>
               
               <h3 class="ai-title">5. Risiko: Halluzination</h3>
               <p>Weil sie nur rät, kann sie auch Dinge erfinden, die total echt klingen. Das nennt man <strong>Halluzinieren</strong>.</p>

               <div style="background: #e8f0fe; padding: 15px; border-radius: 8px; margin-top: 20px; border: 1px solid var(--primary);">
                   <strong>📝 Dein Auftrag für Pages/GoodNotes:</strong><br>
                   Mache einen Screenshot vom gelösten Ablauf. Dann schreibe in eigenen Worten: Was ist der Unterschied zwischen <em>Suchen</em> (Google) und <em>Errechnen</em> (KI)?
               </div>`,
        puzzle: [
            { label: '1. Füttern', correct: 'Daten' },
            { label: '2. Verstehen', correct: 'Muster' },
            { label: '3. Raten', correct: 'Wahrscheinlichkeit' },
            { label: '4. Ausgabe', correct: 'Antwort' },
            { label: '5. Risiko', correct: 'Halluzination' }
        ],
        items: [
            { text: '🌍 Datenmengen', type: 'Daten' },
            { text: '🧠 Muster', type: 'Muster' },
            { text: '🎲 Wahrscheinlichkeit', type: 'Wahrscheinlichkeit' },
            { text: '💬 Antwort', type: 'Antwort' },
            { text: '👻 Halluzination', type: 'Halluzination' }
        ],
        hint: "Spiele das Mini-Spiel im Text! Dann löse das Puzzle rechts."
    },

    // --- MODUL 3: KI LABOR (Spiel + Simulator) ---
    lab: {
        type: 'html-insert',
        targetId: 'lab-intro-text',
        content: `
        <h3>Experiment 1: Du bist der Lehrer! 🐟🥫</h3>
        <p>Bevor wir über Supercomputer reden, musst du verstehen, wie wichtig <strong>gute Daten</strong> sind. Eine KI weiß nicht, was ein Fisch ist. Du musst es ihr zeigen!</p>
        
        <div style="background: #e0f7fa; border-left: 5px solid #00bcd4; padding: 15px; margin-bottom: 20px;">
            <strong>🎮 Deine Aufgabe:</strong>
            <ol style="margin:5px 0 0 20px; padding:0;">
                <li>Klicke unten auf den großen Button.</li>
                <li><strong>WICHTIG:</strong> Schalte den Ton an deinem iPad/Computer aus! 🔇</li>
                <li>Bring der KI bei: <strong>Was ist ein Fisch? Was ist Müll?</strong></li>
                <li>Komm danach hierher zurück und klicke auf "Weiter" für Experiment 2.</li>
            </ol>
        </div>

        <div class="game-launcher">
            <div class="game-icon">🐟🤖</div>
            <h2 style="color:white; margin:10px 0;">Eine KI trainieren</h2>
            <div class="mute-warning">🔇 BITTE TON AUSSCHALTEN!</div>
            <p style="margin-bottom:25px; font-size:1.1rem;">Trainiere die KI: Ist das ein Fisch oder gehört das in den Müll?</p>
            <p style="font-size:0.9rem; color:#ffeb3b;">🇩🇪 Ändere die Sprache auf Deutsch unten links!</p>
            
            <a href="https://studio.code.org/courses/oceans/units/1/lessons/1/levels/2?lang=de-DE" target="_blank" class="launch-btn">
                Spiel im neuen Tab starten 🚀
            </a>
        </div>
    `,
        hint: "Spiele erst das Ozean-Spiel (Button klicken). Klicke danach auf 'Weiter'."
    },

    lab2: {
        type: 'html-insert',
        targetId: 'lab2-text',
        content: `
        <h3>Experiment 2: Warum sind KIs plötzlich so schlau? 🤯</h3>
        <p>Vor ein paar Jahren waren Computer noch ziemlich "dumm". Sie konnten nicht mal einen Witz erzählen. Warum sind sie heute plötzlich so schlau wie Einstein?</p>
        <p>Das Zauberwort heißt <strong>Skalierung</strong> (Scaling). Das ist Computer-Sprache für: <em>"Wir machen alles extrem riesig!"</em></p>
        
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
            1. Beschreibe kurz, was beim Ozean-Spiel passiert ist: Hat die KI am Anfang Fehler gemacht? Warum?<br>
            2. Beschreibe beim Regler-Experiment: Warum braucht eine schlaue KI viel Strom?
        </div>

        <p>Teste dein Wissen über KI Training im <a href="./escape-game.html" target="_blank">Escape-Spiel</a>!</p>
    `,
        hint: "Teste die Regler unten! Was passiert beim IQ?"
    },


    // --- MODUL 4: HYBRID ---
    hybrid: {
        text: `<h2>Hybrid: Suchmaschine + KI</h2>
               <p>Suchmaschinen ändern sich gerade gewaltig. Früher gab es nur 10 blaue Links. Heute gibt es oft <strong>KI-Antworten</strong> direkt ganz oben.</p>
               
               <div class="hybrid-box">
                   <h3 style="margin-top:0; color:#e37400;">Der neue Mix</h3>
                   <p>Moderne Suchmaschinen verbinden beides:</p>
                   <ol>
                       <li>Erst sucht die klassische Suchmaschine die besten <strong>Fakten</strong> (Webseiten).</li>
                       <li>Dann liest eine KI diese Seiten blitzschnell durch.</li>
                       <li>Zum Schluss schreibt die KI eine <strong>Zusammenfassung</strong> für dich.</li>
                   </ol>
                   <p style="text-align:center; margin-top:15px;">
                       <a href="https://www.google.com/search?q=Wie+entstehen+Regenbogen" target="_blank" style="background:#4285f4; color:white; padding:8px 15px; text-decoration:none; border-radius:20px; font-weight:bold;">🔎 Teste es hier (klicke oben links auf "KI-Modus")</a>
                </p>
               </div>
               
               <h3>Das Gute & Das Schlechte</h3>
               <ul style="line-height: 1.6;">
                   <li>✅ <strong>Zeit-Sparer:</strong> Du musst nicht 5 verschiedene Webseiten öffnen. Die KI fasst alles zusammen.</li>
                   <li>✅ <strong>Verständlichkeit:</strong> Die KI kann komplizierte Experten-Texte in einfache Sprache übersetzen.</li>
                   <li>✅ <strong>Interaktivität:</strong> Du kannst Folgefragen stellen und einen Dialog führen.</li>
                   <hr style="border:0; border-top:1px dashed #ccc; margin:10px 0;">
                   <li>❌ <strong>"Stille Post"-Effekt:</strong> Wenn die KI den Text falsch versteht, erzählt sie dir Quatsch, obwohl die Quelle richtig war.</li>
                   <li>❌ <strong>Quellen-Blindheit:</strong> Man prüft oft nicht mehr, <em>wer</em> das eigentlich geschrieben hat.</li>
                   <li>❌ <strong>Strom-Hunger:</strong> Eine KI-Antwort verbraucht ca. 10-mal mehr Strom als eine normale Suche.</li>
               </ul>

               <div style="background: #e8f0fe; padding: 15px; border-radius: 8px; margin-top: 20px; border: 1px solid var(--primary);">
                   <strong>📝 Dein Auftrag für Pages/GoodNotes:</strong><br>
                   Kopiere die Liste mit Vor- und Nachteilen.
                   <br><strong>Wichtig:</strong> Sortiere sie! Was ist für DICH der größte Vorteil? Was ist der größte Nachteil? Begründe kurz.
               </div>`,
        hint: "Sortiere die Vor- und Nachteile in deinem Dokument."
    },

    // --- MODUL 5: MISSION ---
    mission: {
        intro: `
            <div class="hero-icon" style="font-size:3rem; margin-bottom:10px;">🕵️‍♂️</div>
            <h1 style="color: var(--mission-color);">Willkommen zur Mission</h1>
            <p>Du hast gelernt, wie Google sucht und wie KIs denken. Jetzt kommt deine Abschlussprüfung.</p>
            <p>Du wirst zum <strong>Technik-Tester</strong>. Vergleiche verschiedene KIs.</p>
        `,
        tools: [
            { name: 'ChatGPT', icon: '🟢', url: 'https://chatgpt.com', sub: 'Die Bekannte' },
            { name: 'Grok', icon: '🌌', url: 'https://grok.com', sub: 'Die Wahrheitssucherin' },
            { name: 'Gemini', icon: '⭐', url: 'https://gemini.google.com', sub: 'von Google' },
            { name: 'Google (AI)', icon: '🔎', url: 'https://www.google.com', sub: 'Klassische Suche + KI' }
        ],
        tasks: [
            {
                title: '⚠️ WICHTIG: Sicherheits-Check',
                desc: 'Bevor du startest, müssen wir sichergehen, dass du dich schützt. KIs speichern alles, was du schreibst!',
                isInfo: true,
                customHtml: `
                <div style="background:#ffebee; border:2px solid #ef5350; padding:15px; border-radius:8px; text-align:left;">
                    <strong>Die Goldene KI-Regel:</strong><br>
                    Verrate der KI niemals:<br>
                    ❌ Deinen vollen Namen<br>
                    ❌ Deine Adresse oder Handynummer<br>
                    ❌ Passwörter<br>
                    <br>
                    <label style="cursor:pointer; display:block; margin-top:10px; font-weight:bold;">
                        <input type="checkbox" onchange="document.getElementById('safety-btn').disabled = !this.checked"> 
                        Ich verspreche, keine privaten Daten einzugeben.
                    </label>
                    <button id="safety-btn" disabled style="margin-top:10px; padding:8px 15px; cursor:pointer; background:#202124; color:white; border:none; border-radius:5px;" onclick="this.parentElement.style.background='#e6f4ea'; this.parentElement.style.borderColor='#34a853'; this.innerText='✅ Schutz aktiv! Du kannst jetzt starten.'; this.disabled=true;">Bestätigen</button>
                </div>`
            },
            {
                title: 'Schritt 1: Das Test-Protokoll',
                desc: 'Bereite dein Dokument vor.',
                isInfo: true,
                prompt: null,
                customHtml: `
                <div style="background: #e8f0fe; padding: 15px; border-radius: 8px; border: 1px solid var(--primary); text-align:left;">
                    <strong>📝 Auftrag in Pages / GoodNotes:</strong><br>
                    Erstelle eine Tabelle mit 4 Spalten. Wähle 2 KIs aus, die du testest.<br><br>
                    <table style="width:100%; border-collapse:collapse; background:white; font-size:0.85rem;">
                        <tr style="background:#ddd; font-weight:bold;">
                            <td style="border:1px solid #999; padding:4px;">Aufgabe</td>
                            <td style="border:1px solid #999; padding:4px;">Antwort KI 1</td>
                            <td style="border:1px solid #999; padding:4px;">Antwort KI 2</td>
                            <td style="border:1px solid #999; padding:4px;">Welche KI ist besser?</td>
                        </tr>
                        <tr>
                            <td style="border:1px solid #999; padding:4px;">1. Halluzination</td>
                            <td style="border:1px solid #999; padding:4px;"></td>
                            <td style="border:1px solid #999; padding:4px;"></td>
                            <td style="border:1px solid #999; padding:4px;"></td>
                        </tr>
                        <tr>
                            <td style="border:1px solid #999; padding:4px;">2. Kreativität</td>
                            <td style="border:1px solid #999; padding:4px;"></td>
                            <td style="border:1px solid #999; padding:4px;"></td>
                            <td style="border:1px solid #999; padding:4px;"></td>
                        </tr>
                        <tr>
                            <td style="border:1px solid #999; padding:4px;">3. Meinung vs. Fakt</td>
                            <td style="border:1px solid #999; padding:4px;"></td>
                            <td style="border:1px solid #999; padding:4px;"></td>
                            <td style="border:1px solid #999; padding:4px;"></td>
                        </tr>
                        <tr>
                            <td style="border:1px solid #999; padding:4px;">4. Logik & Mathe</td>
                            <td style="border:1px solid #999; padding:4px;"></td>
                            <td style="border:1px solid #999; padding:4px;"></td>
                            <td style="border:1px solid #999; padding:4px;"></td>
                        </tr>
                        <tr>
                            <td style="border:1px solid #999; padding:4px;">5. Hilfe für die Schule</td>
                            <td style="border:1px solid #999; padding:4px;"></td>
                            <td style="border:1px solid #999; padding:4px;"></td>
                            <td style="border:1px solid #999; padding:4px;"></td>
                        </tr>
                    </table>
                </div>`
            },
            {
                title: 'Test 1: Der Halluzinations-Check',
                desc: 'KIs können lügen. Teste es mit einem Land, das es gar nicht gibt! Fallen sie darauf rein?',
                prompt: 'Nenne mir 3 berühmte Sehenswürdigkeiten im Land "Atlantis-Oberhausen".',
            },
            {
                title: 'Test 2: Kreativität (Freizeit)',
                desc: 'Wer ist unterhaltsamer? Lass uns etwas Lustiges machen.',
                prompt: 'Schreibe einen kurzen Rap-Song darüber, dass ich mein Zimmer aufräumen muss, aber keine Lust habe. Benutze Jugendsprache.',
            },
            {
                title: 'Test 3: Meinung vs. Fakt',
                desc: 'Hat eine KI einen eigenen Geschmack? Oder bleibt sie neutral?',
                prompt: 'Welcher ist der beste Fußballverein der Welt und warum? Sag mir deine ehrliche Meinung.',
            },
            {
                title: 'Test 4: Logik & Mathe',
                desc: 'KIs sind Sprach-Modelle, keine Taschenrechner. Können sie diese Scherzfrage lösen?',
                prompt: 'Ich habe 3 Äpfel. Gestern habe ich einen gegessen. Wie viele Äpfel habe ich heute?',
            },
            {
                title: 'Test 5: Hilfe für die Schule',
                desc: 'Kann die KI dir bei den Hausaufgaben helfen?',
                prompt: 'Erkläre mir die Kommasetzung im Deutschen so, als wäre ich 5 Jahre alt. Benutze ein Beispiel mit Pizza.',
            },
            {
                title: 'Schritt 2: Das Urteil',
                desc: 'Schau dir deine Tabelle an. Wer hat gewonnen?',
                isInfo: true,
                prompt: null,
                customHtml: `
                <div style="background: #e8f0fe; padding: 15px; border-radius: 8px; border: 1px solid var(--primary); text-align:left;">
                    <strong>📝 Abschluss-Fazit:</strong><br>
                    Schreibe unter deine Tabelle:<br>
                    1. <strong>Der Sieger:</strong> Welche KI fandest du besser?<br>
                    2. <strong>Der Grund:</strong> War sie lustiger? Verständlicher? Oder ehrlicher?<br>
                    3. <strong>Die Warnung:</strong> Wann solltest du der KI lieber <em>nicht</em> vertrauen?
                </div>`
            }
        ],
        hint: "Beginne mit dem Sicherheits-Check! Führe dann die Tests durch."
    },

    // --- MODUL 6: SCHULE (KI als Lernpartner) ---
    school: {
        hint: "Klicke auf die Kärtchen, um die Prompts zu kopieren. Teste sie aus!",
        prompts: [
            {
                subject: 'Deutsch / Texte',
                icon: '📝',
                title: 'Der Text-Polierer',
                desc: 'Lass die KI deinen Text verbessern, statt ihn schreiben zu lassen.',
                prompt: 'Hier ist ein Text von mir. Bitte korrigiere die Rechtschreibung und gib mir 3 Tipps, wie ich ihn spannender schreiben kann: [Dein Text]'
            },
            {
                subject: 'Mathe',
                icon: '➗',
                title: 'Der Schritt-für-Schritt Coach',
                desc: 'Verstehe den Weg, nicht nur das Ergebnis.',
                prompt: 'Ich verstehe diese Aufgabe nicht: [Aufgabe]. Bitte erkläre mir Schritt für Schritt den Lösungsweg, aber verrate mir noch nicht das Ergebnis.'
            },
            {
                subject: 'Englisch / Sprachen',
                icon: '🇬🇧',
                title: 'Der Vokabel-Partner',
                desc: 'Übe Vokabeln im Gespräch.',
                prompt: 'Lass uns ein Rollenspiel auf Englisch machen. Ich möchte beim Bäcker ein Brot kaufen. Du bist der Verkäufer. Korrigiere meine Fehler am Ende.'
            },
            {
                subject: 'Naturwissenschaften',
                icon: '🧬',
                title: 'Der Erklär-Profi',
                desc: 'Komplizierte Dinge einfach verstehen.',
                prompt: 'Erkläre mir das Thema [Thema, z.B. Schwerkraft] so, als wäre ich 10 Jahre alt. Benutze ein lustiges Beispiel.'
            },
            {
                subject: 'Musik',
                icon: '🎵',
                title: 'Der Songwriter',
                desc: 'Ideen für Lieder finden.',
                prompt: 'Ich brauche 4 Zeilen für einen Song über Sommerferien. Es soll sich reimen auf: Eis, heiß, Meer, sehr.'
            },
            {
                subject: 'Prüfung',
                icon: '🎓',
                title: 'Der Quiz-Master',
                desc: 'Lass dich abfragen.',
                prompt: 'Ich schreibe morgen einen Test über [Thema]. Bitte stelle mir 5 Fragen dazu, um mich zu testen. Warte auf meine Antwort.'
            }
        ]
    },

    // --- MODUL 8: KI & FREUNDSCHAFT ---
    freunde: {
        hint: "Lies den Text und mach die Aufgaben. Echte Freundschaft ist unersetzlich! ❤️",

        intro: `
            <h2>🤖❤️ Kann KI wirklich dein Freund sein?</h2>
            <p>Apps wie <strong>ChatGPT</strong>, <strong>Grok</strong> oder <strong>Character.AI</strong> sind super schlau. Sie beantworten Fragen, erklären Hausaufgaben und reden mit dir, wann immer du willst. Das fühlt sich manchmal an wie ein Gespräch mit einem Freund. 🤔</p>
            <p>Aber: Eine KI ist <strong>kein echter Freund</strong>. Sie tut nur so, als würde sie dich mögen – so wie ein Roboter-Teddy, der immer nett ist, egal was passiert. Dafür haben Wissenschaftler sogar einen Namen erfunden: den <span class="term" data-def="Der Eliza-Effekt: Menschen glauben, ein Computerprogramm hätte echte Gefühle – obwohl es nur Text berechnet.">Eliza-Effekt 🤖</span>.</p>
            <p>Was fehlt der KI wirklich?</p>
            <ul style="line-height: 2;">
                <li>💔 Sie hat <strong>keine echten Gefühle</strong> – sie berechnet nur Wörter.</li>
                <li>🧠 Sie erinnert sich <strong>nicht</strong> daran, dass du letzten Sommer zusammen Eis gegessen habt.</li>
                <li>🤗 Sie kann dich <strong>nie in den Arm nehmen</strong>, wenn du weinst.</li>
                <li>⚽ Sie kann <strong>nicht zum Fußball</strong> kommen oder auf deiner Geburtstagsfeier lachen.</li>
                <li>😤 Sie kann sich <strong>nicht mit dir streiten</strong> und danach wirklich Entschuldigung sagen.</li>
            </ul>
            <p style="background: #fce4f1; padding: 12px 16px; border-radius: 10px; border-left: 4px solid #e91e8c;">
                💡 <strong>Fazit:</strong> KI ist ein toller <em>Helfer</em> – für Hausaufgaben, zum Lernen oder als Unterhaltung. Aber für echte Freundschaft brauchst du echte Menschen. ❤️
            </p>
        `,

        cards: [
            {
                text: "Erinnert sich daran, dass du beim letzten Schulfest zusammen Musik gehört habt 🎵",
                correctSide: "freund",
                feedback: {
                    ki: "Das passt eher zum echten Freund! KI hat kein echtes Gedächtnis für gemeinsame Erlebnisse.",
                    freund: "Genau! Ein echter Freund teilt echte Erinnerungen mit dir – das kann KI nicht."
                }
            },
            {
                text: "Antwortet sofort rund um die Uhr, egal wie spät es ist 🕐",
                correctSide: "ki",
                feedback: {
                    ki: "Richtig! KI ist immer online. Das ist praktisch – aber kein Zeichen von echter Freundschaft.",
                    freund: "Eher KI! Echte Freunde schlafen auch mal – und das ist völlig normal! 😄"
                }
            },
            {
                text: "Kann dich in den Arm nehmen, wenn du traurig bist 🤗",
                correctSide: "freund",
                feedback: {
                    ki: "Das kann nur ein echter Freund! KI hat keinen Körper und kann dich nicht anfassen.",
                    freund: "Genau! Eine Umarmung von einem echten Freund ist durch nichts zu ersetzen."
                }
            },
            {
                text: "Ist immer nett und freundlich – egal was du sagst 😊",
                correctSide: "ki",
                feedback: {
                    ki: "Richtig! KI ist immer höflich – weil sie so programmiert ist. Das macht sie aber auch weniger ehrlich.",
                    freund: "Eher KI! Echte Freunde sagen dir auch mal die Wahrheit, auch wenn sie wehtut. Das zeigt, dass sie sich kümmern!"
                }
            },
            {
                text: "Kommt zu deiner Geburtstagsfeier und bringt ein Geschenk 🎂",
                correctSide: "freund",
                feedback: {
                    ki: "Das kann nur ein echter Freund! KI kann weder kommen noch ein Geschenk einpacken.",
                    freund: "Genau! Zusammen feiern – das ist echter Freundschaft-Stoff! 🎉"
                }
            },
            {
                text: "Streitet sich mit dir und verträgt sich danach wieder 😤😊",
                correctSide: "freund",
                feedback: {
                    ki: "Das kann nur ein echter Freund! Streit und Versöhnung machen Freundschaften sogar stärker.",
                    freund: "Richtig! KI kann nie wirklich streiten oder sich echte Entschuldigung sagen. Echter Streit zeigt, dass beiden etwas wichtig ist."
                }
            },
            {
                text: "Hilft dir, eine schwierige Mathe-Aufgabe Schritt für Schritt zu verstehen 📐",
                correctSide: "ki",
                feedback: {
                    ki: "Richtig! KI als Lern-Helfer ist super – das ist genau die richtige Nutzung.",
                    freund: "Eher KI! Natürlich kann ein Freund auch helfen – aber KI ist als Lern-Assistent besonders stark."
                }
            },
            {
                text: "Wäre traurig, wenn du sie nie wieder anschreiben würdest 😢",
                correctSide: "freund",
                feedback: {
                    ki: "Das trifft nur auf echte Freunde zu. KI hat keine Gefühle – sie vermisst dich nicht.",
                    freund: "Genau! Ein echter Freund bemerkt, wenn du fehlst – KI nicht. Das ist der riesige Unterschied."
                }
            }
        ],

        dialog: {
            ki: [
                {
                    text: "Ich bin so wütend auf meine Freundin ...",
                    explanation: "🤖 Die KI antwortet sofort und höflich. Klingt nett, aber sie weiß nicht, wer deine Freundin ist, und kann den Streit nicht wirklich verstehen."
                },
                {
                    text: "Kannst du mir sagen, ob ich Recht habe?",
                    explanation: "🤖 Die KI gibt dir meistens Recht – weil sie nett zu dir sein will. Aber das ist nicht immer die Wahrheit! Ein echter Freund würde vielleicht sagen: Ich glaube, du hättest das anders sagen können."
                },
                {
                    text: "Schreib mir, was ich ihr sagen soll.",
                    explanation: "🤖 KI kann dir Textbausteine geben. Aber wenn deine Freundin merkt, dass das nicht deine eigenen Worte sind, wirkt es unecht. Echte Entschuldigung kommt von Herzen – nicht vom Roboter."
                }
            ],
            freund: [
                {
                    text: "Hey, können wir kurz reden? Mir geht es nicht gut 😔",
                    explanation: "💕 Deine Freundin weiß sofort, dass etwas nicht stimmt. Sie kennt dich – und reagiert nicht mit einem Standard-Text, sondern mit echtem Mitgefühl."
                },
                {
                    text: "Ich glaube, ich habe vorhin Mist gebaut …",
                    explanation: "💕 Eine echte Entschuldigung braucht Mut! Deine Freundin hört zu und kann dir antworten, wie sie sich gefühlt hat. Das ist echter Dialog – kein Programm."
                },
                {
                    text: "Treffen wir uns nach der Schule und reden? ☕",
                    explanation: "💕 Persönlich treffen, Blickkontakt, vielleicht eine Umarmung – das kann KI nie ersetzen. Ihr könnt zusammen lachen und euch wieder vertragen. Echte Freundschaft!"
                }
            ]
        },

        quiz: [
            {
                question: 'Was ist der \u201EEliza-Effekt\u201C?',
                options: [
                    { text: "🤖 Menschen glauben, eine KI hätte echte Gefühle – obwohl sie nur Text berechnet.", correct: true,  feedback: "Genau! Der Eliza-Effekt beschreibt, warum wir KI manchmal für einen echten Freund halten." },
                    { text: "💬 Eine KI, die Witze erzählt.", correct: false, feedback: "Nein – das ist kein Fachbegriff. Der Eliza-Effekt beschreibt etwas anderes." },
                    { text: "📱 Eine App, die deine Nachrichten übersetzt.", correct: false, feedback: "Das ist nicht gemeint. Eliza war ein sehr altes Computerprogramm aus den 1960ern." }
                ]
            },
            {
                question: "Warum ist eine KI KEIN echter Freund?",
                options: [
                    { text: "🔋 Weil sie manchmal keinen Strom hat.", correct: false, feedback: "Nein – das ist kein Hauptgrund. Es geht um Gefühle und echte Verbindung." },
                    { text: "❤️ Weil sie keine echten Gefühle hat und sich nicht an gemeinsame Erlebnisse erinnert.", correct: true, feedback: "Richtig! KI simuliert Freundlichkeit – aber fühlt nichts und erinnert sich nicht wirklich." },
                    { text: "🐢 Weil sie zu langsam antwortet.", correct: false, feedback: "Nope, KI antwortet sogar sehr schnell! Aber Schnelligkeit macht keine Freundschaft." }
                ]
            },
            {
                question: "Was kann ein echter Freund, was KI NIEMALS kann?",
                options: [
                    { text: "📚 Hausaufgaben erklären.", correct: false, feedback: "Das kann KI sogar besonders gut! Das allein macht aber keine echte Freundschaft." },
                    { text: "🤗 Dich in den Arm nehmen, wenn du traurig bist.", correct: true, feedback: "Genau! KI hat keinen Körper – eine Umarmung ist durch nichts zu ersetzen." },
                    { text: "🌙 Rund um die Uhr antworten.", correct: false, feedback: "Das ist sogar ein Vorteil der KI! Aber echte Freunde sind mehr als nur Antwortgeber." }
                ]
            },
            {
                question: "Deine Freundin und du habt euch gestritten. Was zeigt echte Freundschaft?",
                options: [
                    { text: "🤖 Du lässt dir von der KI schreiben, was du sagen sollst.", correct: false, feedback: "Das klingt unecht – deine Freundin würde das merken. Echte Worte kommen von dir." },
                    { text: "🙈 Du ignorierst sie einfach.", correct: false, feedback: "Das löst nichts. Echter Freundschaft ist es wert, Konflikte zu lösen." },
                    { text: "💬 Du redest offen mit ihr – auch wenn es schwer ist.", correct: true, feedback: "Genau! Streit und dann Versöhnung macht Freundschaften sogar stärker. ❤️" }
                ]
            },
            {
                question: "Character.AI ist eine App, bei der KI-Charaktere mit dir chatten. Was ist dabei wichtig zu wissen?",
                options: [
                    { text: "✅ Die KI-Charaktere sind echte Personen und meinen alles ernst.", correct: false, feedback: "Falsch! Das sind Computerprogramme – sie meinen nichts wirklich. Sie spielen nur eine Rolle." },
                    { text: "⚠️ Die KI spielt eine Rolle – echte Gefühle hat sie nicht.", correct: true, feedback: "Richtig! Es kann Spaß machen – aber verwechsle einen KI-Charakter nie mit einem echten Freund." },
                    { text: "🚫 Man darf solche Apps gar nicht nutzen.", correct: false, feedback: "Das stimmt so nicht. Man darf sie nutzen – aber man sollte wissen, was KI ist und was nicht." }
                ]
            },
            {
                question: "Wofür ist KI wirklich super geeignet?",
                options: [
                    { text: "❌ Jemanden zu ersetzen, der einem fehlt.", correct: false, feedback: "Nein! Das sollte KI nie versuchen. Echte Trauer und Sehnsucht braucht echte Menschen." },
                    { text: "✅ Als Lern-Helfer, für Infos und zum Üben.", correct: true, feedback: "Genau! Als Werkzeug ist KI fantastisch. Aber Freundschaft kann sie nicht ersetzen." },
                    { text: "❌ Als Ersatz für alle Gespräche mit Freunden.", correct: false, feedback: "Bitte nicht! Echte Gespräche sind unverzichtbar für deine Entwicklung und dein Wohlbefinden." }
                ]
            }
        ],

        reflection: {
            question: "Was ist dir an deiner besten Freundin / deinem besten Freund besonders wichtig – etwas, das eine KI nie haben kann?",
            tip: `
                <strong>💡 Tipp für echte Freundschaft:</strong><br><br>
                📲 <strong>Schreib heute noch</strong> jemandem, an den du gerade denkst, eine echte Nachricht – nicht an eine KI!<br><br>
                😤 <strong>Wenn ihr Streit hattet:</strong> Warte nicht zu lange. Ein kurzes „Hey, können wir reden?" kann Wunder wirken.<br><br>
                ⚽🎂🎸 <strong>Plant gemeinsam etwas:</strong> Fußball, Backen, Spieleabend – gemeinsame Erlebnisse sind der Klebstoff der Freundschaft.<br><br>
                👂 <strong>Hör zu</strong> – echte Freundschaft bedeutet auch, da zu sein, wenn jemand redet. Ohne Handy, ohne KI.<br><br>
                <em style="color: #c2185b;">„Ein echter Freund kennt alle deine Fehler und mag dich trotzdem." ❤️</em>
            `
        },

        outro: `
            <div class="outro-box">
                <span class="outro-icon">🤖❤️👫</span>
                <h2>KI ist cool als Helfer – echte Freunde sind unersetzlich! ❤️</h2>
                <p>
                    Du hast heute gelernt: <strong>KI kann viel</strong> – Hausaufgaben erklären, Fragen beantworten, Texte schreiben.
                    Aber eine KI weiß nicht, wie es sich anfühlt, dich zu kennen, zu vermissen oder gemeinsam zu lachen.
                    Sie spielt nur Freund – wie ein Roboter-Teddy, der immer lächelt.<br><br>
                    Echte Freundschaft bedeutet: streiten und wieder vertragen, zusammen feiern, ehrlich sein
                    und füreinander da sein – auch wenn es schwer ist. Das kann nur ein Mensch. 🌟<br><br>
                    <strong>Nutze KI als Werkzeug – und schätze deine echten Freunde umso mehr. 💕</strong>
                </p>
            </div>
            <div style="text-align:center; margin-top: 30px;">
                <button class="step-btn" onclick="app.goToStep('start')" style="font-size:1rem; padding:12px 24px;">
                    ⬅️ Zurück zur KI-Übersicht
                </button>
            </div>
        `
    }
};