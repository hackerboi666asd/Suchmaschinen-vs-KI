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
                   Baue das Puzzle rechts. Übertrage den Ablauf dann als kleine Zeichnung oder mit Formen in dein Dokument.
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
                    <button onclick="alert('✅ Sehr wahrscheinlich (95%)! Das würde die KI wählen.')" style="margin:5px; padding:5px 10px; cursor:pointer; font-weight:bold;">Käse 🧀</button>
                    <button onclick="alert('⚠️ Möglich, aber seltener (4%). Vielleicht in einem Cartoon?')" style="margin:5px; padding:5px 10px; cursor:pointer;">Teppich 🧶</button>
               </div>

               <h3 class="ai-title">4. Antwort generieren</h3>
               <p>Aus den berechneten Wörtern baut sie einen ganzen Satz. Das ist ihre <strong>Antwort</strong> an dich.</p>
               
               <h3 class="ai-title">5. Risiko: Halluzination</h3>
               <p>Weil sie nur rät, kann sie auch Dinge erfinden, die total echt klingen. Das nennt man <strong>Halluzinieren</strong>.</p>

               <div style="background: #e8f0fe; padding: 15px; border-radius: 8px; margin-top: 20px; border: 1px solid var(--primary);">
                   <strong>📝 Dein Auftrag für Pages/GoodNotes:</strong><br>
                   Schreibe in eigenen Worten: Was ist der Unterschied zwischen <em>Suchen</em> (Google) und <em>Errechnen</em> (KI)?
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

    // --- MODUL 3: LABOR ---
    lab: {
        type: 'html-insert',
        targetId: 'lab-intro-text',
        content: `
             

            <h3>Warum sind KIs plötzlich so schlau? 🤯</h3>
            <p>Vor ein paar Jahren waren Computer noch ziemlich "dumm". Sie konnten nicht mal einen Witz erzählen. Warum sind sie heute plötzlich so schlau wie Einstein?</p>
            <p>Das Zauberwort heißt <strong>Skalierung</strong>. Das ist Computer-Sprache für: <em>"Wir machen alles extrem riesig!"</em></p>
            
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
                       <a href="https://www.google.com/search?q=Wie+entstehen+Regenbogen" target="_blank" style="background:#4285f4; color:white; padding:8px 15px; text-decoration:none; border-radius:20px; font-weight:bold;">🔎 Teste es hier</a>
                       <br><small>(Hinweis: Manchmal erscheint die AI-Box nicht bei jedem.)</small>
                   </p>
               </div>
               
               <h3>Das Gute & Das Schlechte</h3>
               <ul style="line-height: 1.6;">
                   <li>✅ <strong>Zeit-Sparer:</strong> Du musst nicht 5 verschiedene Webseiten öffnen. Die KI fasst alles zusammen.</li>
                   <li>✅ <strong>Verständlichkeit:</strong> Die KI kann komplizierte Experten-Texte in einfache Sprache übersetzen.</li>
                   <hr style="border:0; border-top:1px dashed #ccc; margin:10px 0;">
                   <li>❌ <strong>"Stille Post"-Effekt:</strong> Wenn die KI den Text falsch versteht, erzählt sie dir Quatsch, obwohl die Quelle richtig war.</li>
                   <li>❌ <strong>Quellen-Blindheit:</strong> Man prüft oft nicht mehr, <em>wer</em> das eigentlich geschrieben hat.</li>
                   <li>❌ <strong>Strom-Hunger:</strong> Eine KI-Antwort verbraucht ca. 10-mal mehr Strom als eine normale Suche.</li>
               </ul>

               <div style="background: #e8f0fe; padding: 15px; border-radius: 8px; margin-top: 20px; border: 1px solid var(--primary);">
                   <strong>📝 Dein Auftrag für Pages/GoodNotes:</strong><br>
                   Erstelle eine Liste mit Vor- und Nachteilen. 
                   <br><strong>Wichtig:</strong> Sortiere sie! Was ist für DICH der größte Vorteil? Was ist die gefährlichste Gefahr? Begründe kurz.
               </div>`,
        quiz: [
            { text: 'Vorteil: Man spart Zeit.', correct: true, feedback: '✅ Richtig! Das ist der Hauptgrund für KI-Suche.' },
            { text: 'Nachteil: Quellen-Blindheit.', correct: true, feedback: '✅ Genau! Man weiß nicht mehr, wer es geschrieben hat.' },
            { text: 'Vorteil: Die KI übersetzt schwere Texte.', correct: true, feedback: '✅ Stimmt! Sie hilft beim Verstehen.' },
            { text: 'Die KI verbraucht weniger Strom.', correct: false, feedback: '❌ Falsch. KI braucht riesige Rechenzentren.' }
        ],
        hint: "Klicke rechts auf den Wissens-Check! Sortiere danach die Vor- und Nachteile in deinem Dokument."
    },

    // --- MODUL 5: MISSION ---
    mission: {
        intro: `
            <div class="hero-icon" style="font-size:3rem; margin-bottom:10px;">🕵️‍♂️</div>
            <h1 style="color: var(--mission-color);">Willkommen zurück, Detektiv!</h1>
            <p>Du hast gelernt, wie Google sucht und wie KIs denken. Jetzt kommt deine Abschlussprüfung.</p>
            <p>Du wirst zum <strong>Technik-Tester</strong>. Vergleiche verschiedene KIs und finde heraus: Welche ist die beste für die Schule? Welche für die Freizeit?</p>
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
                            <td style="border:1px solid #999; padding:4px;">Note (1-5 ⭐)</td>
                        </tr>
                        <tr>
                            <td style="border:1px solid #999; padding:4px;">1. Halluzination</td>
                            <td style="border:1px solid #999; padding:4px;"></td>
                            <td style="border:1px solid #999; padding:4px;"></td>
                            <td style="border:1px solid #999; padding:4px;"></td>
                        </tr>
                    </table>
                    <br><em>Füge Zeilen für die anderen Aufgaben hinzu!</em>
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
                title: 'Test 5: Der Erklär-Bär (Schule)',
                desc: 'Kann die KI dir bei den Hausaufgaben helfen?',
                prompt: 'Erkläre mir Photosynthese so, als wäre ich 5 Jahre alt. Benutze ein Beispiel mit Pizza.',
            },
            {
                title: 'Schritt 7: Das Urteil',
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
    }
};