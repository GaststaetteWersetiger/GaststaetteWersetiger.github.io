// =============================================================================
// DATEN FÜR DIE WEBSEITE Wersetiger
// =============================================================================

const webseitenInhalt = {

    // --- SPEISEKARTE --------------------------------------------------------
    speisekarte: {
        titel: "Unsere aktuelle Auswahl",

        // Allergen-Hinweis
        allergenHinweis: "In unserem Betrieb werden Zusatzstoffe sowie Allergene (Milch, Eier, Sellerie etc.) verarbeitet 1) Farbstoff 2) Konservierungsstoffe 3) Antioxidationsmittel 4) Geschmacksverstärker 5) geschwefelt/enthält Sulfit 6) geschwärzt 7) mit Phosphat 8) mit Milcheiweiß 9) Süßungsmittel 10) Stärke 11) Gluten 12) Ei 13) Nüsse 14) Laktose 15) Sellerie 16) Senf 17) Soja 18) Sesam 21) Formfleisch",
        allergenZusatz: "Änderungen, Irrtümer und Druckfehler vorbehalten.",

        kategorien: [
            {
                name: "Suppen",
                gerichte: [
                    { name: "Französische Zwiebelsuppe mit Käsecroutons überbacken", preis: "6,50 €", allergene: "" },
                    { name: "Tomatencremesuppe der Provence mit Mandelsahnehaube und Baguette", preis: "6,50 €", allergene: "" }
                ]
            },
            {
                name: "Salate",
                gerichte: [
                    { name: "Tomate – Mozzarella - Salat mit frischem Basilikum und Baguette", preis: "9,00 €", allergene: "11,15" },
                    { name: "Bunter Salatteller mit Schweinefiletstreifen, Croutons, French Dressing und Baguette", preis: "15,90 €", allergene: "2,3,4,11,15" },
                    { name: "Chefsalat mit Thunfisch, Zwiebelringen, Italian Dressing und Baguette", preis: "13,50 €", allergene: "11" },
                    { name: "Bunte Salate mit Hähnchenbruststreifen, Croutons Yoghurt-Dill-Dressing und Baguette", preis: "14,90 €", allergene: "11,15" }
                ]
            },
            {
                name: "Schnitzel",
                gerichte: [
                    { name: "Schnitzel \"Wiener Art\"", preis: "16,50 €", allergene: "11,12" },
                    { name: "\"Krüstchen\": Schnitzel mit Spiegelei", preis: "17,50 €", allergene: "11,12" },
                    { name: "Champignonrahmschnitzel", preis: "17,50 €", allergene: "11,12,15,16,17" },
                    { name: "Zigeunerschnitzel", preis: "17,50 €", allergene: "11,12,15,16,17" },
                    { name: "Zwiebelschnitzel", preis: "17,50 €", allergene: "11,12" },
                    { name: "Schnitzel \"Mexiko\" mit Bacon, Zwiebeln und Käse überbacken", preis: "19,50 €", allergene: "" },
                    { name: "Schnitzel \"Italian\" mit Tomaten, Sc. Hollandaise und Käse überbacken", preis: "19,50 €", allergene: "" },
                    { name: "Ratsherrenschnitzel mit Sc. Hollandaise, gerösteten Zwiebeln und Käse überbacken", preis: "19,50 €", allergene: "11,12,14,15,16,17" },
                    { name: "Braumeisterschnitzel mit frischen Champignons in Rahm, Kochschinken und Käse überbacken", preis: "19,50 €", allergene: "1,11,12,14,15,16,17" }
                ],
                zusatzinfo: "Bei diesen Gerichten sind Pommes frites und ein Salat vom Buffet inbegriffen"
            },
            {
                name: "Steakgerichte",
                gerichte: [
                    { name: "Argentinisches Rumpsteak (230 gr) mit angeschwenkten Champignons, Prinzessbohnen im Speckmantel und Bratkartoffeln", preis: "28,90 €", allergene: "2,3" },
                    { name: "Argentinisches Rumpsteak (230 gr) mit Zwiebeln, Kroketten und ein Salat vom Buffet", preis: "28,00 €", allergene: "8,10" },
                    { name: "Argentinisches Rumpsteak (230 gr) \"Diabolo\" mit geschmorten Paprika- und Zwiebelstreifen, gefüllten Kartoffeltaschen und ein Salat vom Buffet", preis: "28,50 €", allergene: "8,10,15" },
                    { name: "Rückensteak vom Schwein mit Pfefferrahmsoße, Schinkenstreifen, geschmorten Champignons, Bratkartoffeln und ein Salat vom Buffet", preis: "18,90 €", allergene: "10,11,14,15" },
                    { name: "Holzfällersteak mit Pfefferrahmsoße und Zwiebeln,Spiegelei Potato wedges und ein Salat vom Buffet", preis: "18,90 €", allergene: "10,11,14,15" },
                    { name: "Rückensteak vom Schwein mit hausgemachter Kräuterbutter, Prinzessbohnen im Speckmantel und Kroketten", preis: "18,00 €", allergene: "" },
                    { name: "\"Mixed Grill\" kleines Rumpsteak, Schweinemedaillon und Hähnchenfilet auf Grillgemüse, Cevapcci, hausgemachter Kräuterbutter und potato wedges", preis: "24,00 €", allergene: "10,11,15,16" }
                ],
            },
            {
                name: "Geflügel und Hausspezialitäten",
                gerichte: [
                    { name: "Nudelauflauf mit Blattspinat, Tomatencroutons, Hähnchenfiletstreifen, feiner Käserahmsoße und Käse überbacken", preis: "16,50 €", allergene: "" },
                    { name: "Nudelauflauf mit Blattspinat, Lachsfiletstreifen, Tomatencroutons, feiner Käserahmsoße und Käse überbacken", preis: "16,50 €", allergene: "" },
                    { name: "Hähnchenbrustfilet mit Curryrahm und tropischen Früchten, gebackenem Pfirsich, Wildreistimbal mit frischen Kräutern und ein Salat vom Buffet", preis: "18,20 €", allergene: "8,10,12" },
                    { name: "Hähnchenbruststeak in Mandelkruste, angeschwenkten Champignons in Rahm, Röstinchen und ein Salat vom Buffet", preis: "18,50 €", allergene: "10,15,16,17" },
                    { name: "Schweinefiletgeschnetzeltes \"Dijon\" mit frischen Champignons mit Kroketten und ein Salat vom Buffet", preis: "18,00 €", allergene: "10,11,15,16" },
                    { name: "3 Schweinemedaillons im Speckmantel auf Pfefferrahmsoße, Kroketten und ein Salat vom Buffet", preis: "22,40 €", allergene: "10,15" }
                ],
            },
            {
                name: "Fischgerichte",
                gerichte: [
                    { name: "Sahneheringsfilet mit roten Zwiebelringen, Salatumlage und Bratkartoffeln", preis: "13,50 €", allergene: "14,15" },
                    { name: "Frische Matjesfilets mit gemischten Zwiebelwürfeln, Salatumlage und Bratkartoffeln (Saisonabhängig)", preis: "15,80 €", allergene: "" },
                    { name: "Geräuchertes Lachs- und Forellenfilet, Salatumlage Bauernrösti und Preiselbeersahnemeerrettich", preis: "14,80 €", allergene: "10,14" }
                ],
            },
            {
                name: "Tellergerichte",
                gerichte: [
                    { name: "Bratwurst mit Pommes frites, Senf und Majo", preis: "7,70 €", allergene: "15,16,17" },
                    { name: "Currywurst mit Pommes frites und Majo", preis: "8,50 €", allergene: "10,15,16,17" },
                    { name: "Pikante Bauernsülze mit hausgemachter Remoulade, Salatumlage und Bratkartoffeln", preis: "13,50 €", allergene: "3,15,16" },
                    { name: "\"Damentoast\" Schweinemedaillons auf Toast, Kochschinken, frischen Champignons und Käse überbacken mit Salatumlage", preis: "14,60 €", allergene: "1,15" }
                ]
            },
            {
                name: "Vegetarisch",
                gerichte: [
                    { name: "2 gebackene Camembert mit Salatumlage, Preiselbeersahne, Butter und Baguette", preis: "12,00 €", allergene: "1,11,14,15" },
                    { name: "Frisches Grillgemüse mit Fetakäse, Dip und gefüllten Kartoffeltaschen", preis: "15,50 €", allergene: "10,14,15" },
                    { name: "Blattspinat mit geschwenkten Champignons in Rahmsauce, Tomatenecken und Bauern Rösti", preis: "11,50 €", allergene: "4,14,15,16,17" },
                    { name: "Nudelauflauf mit Grillgemüse, feiner Käserahmsoße und Käse überbacken", preis: "13,50 €", allergene: "" },
                    { name: "Wrap gefüllt mit mediterranem Gemüse, Fetakäse, Dip und Salatumlage", preis: "13,80 €", allergene: "" }
                ]
            },
            {
                name: "Für unsere kleinen Gäste",
                gerichte: [
                    { name: "\"Wersetiger\" Hausgemachte Chicken Nuggets mit pommes frites, Ketchup und Majo", preis: "7,90 €", allergene: "3,15,21" },
                    { name: "\"Alf\" Kleines Schweineschnitzel mit Möhrensalat, pommes frites, Ketchup und Majo", preis: "8,50 €", allergene: "3,15" },
                    { name: "\"Miss Piggy\" Kleines Hähnchenschnitzel mit Nudeln in Tomatensoße und Gemüse", preis: "8,00 €", allergene: "" }
                ]
            },
            {
                name: "Beilagen",
                gerichte: [
                    { name: "Pommes frites", preis: "4,00 €", allergene: "" },
                    { name: "Kroketten", preis: "4,00 €", allergene: "8,10" },
                    { name: "Rösti", preis: "4,00 €", allergene: "10" },
                    { name: "Bratkartoffeln", preis: "5,70 €", allergene: "" },
                    { name: "Ketchup/Majo", preis: "0,60 €", allergene: "3,15" }
                ]
            },
            {
                name: "Eiskarte",
                gerichte: [
                    { name: "3 große Kugeln Eis (Vanille, Schokolade, Walnuss)", preis: "5,10 €", allergene: "1,3,13,14,19" },
                    { name: "3 große Kugeln Eis mit Schlagsahne (Vanille, Schokolade, Walnuss)", preis: "5,90 €", allergene: "1,3,13,14,19" },
                    { name: "Walnuss Eisbecher mit Walnüssen, Krokant, Baileys und Schlagsahne", preis: "7,20 €", allergene: "1,3,13,14,19" },
                    { name: "\"Pfirsich Melba\" mit Himbeersoße und Schlagsahne", preis: "6,90 €", allergene: "1,3,13,14,19" },
                    { name: "\"Cup Danmark\" Vanilleeis mit Schokosauce und Schlagsahne", preis: "6,90 €", allergene: "1,3,13,14,19" }
                ]
            }
        ]
    },

    // --- GETRÄNKEKARTE ------------------------------------------------------
    getraenkekarte: {
        kategorien: [
            {
                name: "Warme Getränke",
                getraenke: [
                    { name: "Tasse Kaffee Crema", preis: "2,50 €" },
                    { name: "Latte Macchiato", preis: "3,90 €" },
                    { name: "Cappuccino", preis: "3,30 €" },
                    { name: "Espresso", preis: "2,40 €" },
                    { name: "Doppelter Espresso", preis: "4,00 €" },
                    { name: "Espresso Macciato", preis: "2,70 €" },
                    { name: "Glas Tee", preis: "2,90 €" },
                    { name: "Americano", preis: "2,50 €" },
                    { name: "Flat White", preis: "3,50 €" },
                    { name: "Pott Kakao mit Sahne", preis: "3,50 €" }
                ]
            },
            {
                name: "Alkoholfreie Getränke",
                getraenke: [
                    { name: "Cola/Cola Zero", groessen: [{ size: "0,2 l", preis: "2,30 €" }, { size: "0,3 l", preis: "3,40 €" }, { size: "0,5 l", preis: "5,00 €" }] },
                    { name: "Fanta", groessen: [{ size: "0,2 l", preis: "2,30 €" }, { size: "0,3 l", preis: "3,40 €" }, { size: "0,5 l", preis: "5,00 €" }] },
                    { name: "Sprite", groessen: [{ size: "0,2 l", preis: "2,30 €" }, { size: "0,3 l", preis: "3,40 €" }, { size: "0,5 l", preis: "5,00 €" }] },
                    { name: "Regina", groessen: [{ size: "0,2 l", preis: "2,30 €" }, { size: "0,3 l", preis: "3,40 €" }, { size: "0,5 l", preis: "5,00 €" }] },
                    { name: "Apfelsaft / Apfelschorle", groessen: [{ size: "0,2 l", preis: "2,50 €" }, { size: "0,3 l", preis: "3,50 €" }, { size: "0,5 l", preis: "5,20 €" }] },
                    { name: "Orangensaft", groessen: [{ size: "0,2 l", preis: "2,70 €" }, { size: "0,3 l", preis: "3,80 €" }, { size: "0,5 l", preis: "5,50 €" }] },
                    { name: "Bitter Lemon", groessen: [{ size: "Fl. 0,2 l", preis: "2,70 €" }] },
                    { name: "Tonic", groessen: [{ size: "Fl. 0,2 l", preis: "2,70 €" }] },
                    { name: "Wild Berry", groessen: [{ size: "Fl. 0,2 l", preis: "2,70 €" }] },
                    { name: "Gerolsteiner", groessen: [{ size: "Fl. 0,25 l", preis: "2,50 €" }, { size: "Fl. 0,75 l", preis: "5,90 €" }] },
                    { name: "Gerolsteiner still", groessen: [{ size: "Fl. 0,25 l", preis: "2,50 €" }] },
                    { name: "Fassbrause Zitrone", groessen: [{ size: "Fl. 0,33 l", preis: "3,50 €" }] },
                    { name: "Fassbrause Rhabarber", groessen: [{ size: "Fl. 0,33 l", preis: "3,50 €" }] },
                    { name: "Fassbrause Apfel", groessen: [{ size: "Fl. 0,33 l", preis: "3,50 €" }] },
                    { name: "Fassbrause Johannisbeere", groessen: [{ size: "Fl. 0,33 l", preis: "3,50 €" }] },
                    { name: "Fassbrause Mango", groessen: [{ size: "Fl. 0,33 l", preis: "3,50 €" }] }
                ]
            },
            {
                name: "Biere",
                getraenke: [
                    { name: "Krombacher", groessen: [{ size: "0,2 l", preis: "2,30 €" }, { size: "0,3 l", preis: "3,50 €" }, { size: "0,5 l", preis: "5,20 €" }] },
                    { name: "Köstritzer", groessen: [{ size: "0,2 l", preis: "2,50 €" }, { size: "0,3 l", preis: "3,70 €" }, { size: "0,5 l", preis: "5,50 €" }] },
                    { name: "Alster/Radler", groessen: [{ size: "0,2 l", preis: "2,30 €" }, { size: "0,3 l", preis: "3,50 €" }, { size: "0,5 l", preis: "5,20 €" }] },
                    { name: "Tango", groessen: [{ size: "0,2 l", preis: "2,30 €" }, { size: "0,3 l", preis: "3,50 €" }, { size: "0,5 l", preis: "5,20 €" }] },
                    { name: "Diesel", groessen: [{ size: "0,2 l", preis: "2,30 €" }, { size: "0,3 l", preis: "3,50 €" }, { size: "0,5 l", preis: "5,20 €" }] },
                    { name: "Krombacher Weizen (Saison)", groessen: [{ size: "0,3 l", preis: "3,60 €" }, { size: "0,5 l", preis: "5,30 €" }] },
                    { name: "Krombacher Weizen", groessen: [{ size: "Fl. 0,5 l", preis: "5,10 €" }] },
                    { name: "Krombacher Kellerbier", groessen: [{ size: "Fl. 0,33 l", preis: "3,50 €" }] },
                    { name: "Krombacher Weizen alkoholfrei", groessen: [{ size: "Fl. 0,5 l", preis: "5,10 €" }] },
                    { name: "Krombacher Pils alkoholfrei", groessen: [{ size: "Fl. 0,33 l", preis: "3,50 €" }] },
                    { name: "Krombacher Radler alkoholfrei", groessen: [{ size: "Fl. 0,33 l", preis: "3,50 €" }] }
                ]
            },
            {
                name: "Spirituosen und Liköre",
                getraenke: [
                    { name: "Korn", menge: "2 cl", preis: "1,70 €" },
                    { name: "Korn-Schuß", menge: "2 cl", preis: "1,70 €" },
                    { name: "Sasse Lagerkorn", menge: "2 cl", preis: "3,40 €" },
                    { name: "Sasse Williams mit Honig", menge: "2 cl", preis: "3,30 €" },
                    { name: "Sasse Arabica", menge: "2 cl", preis: "3,30 €" },
                    { name: "Sasse Marille mit Honig", menge: "2 cl", preis: "3,30 €" },
                    { name: "Sasse Schokomint", menge: "2 cl", preis: "3,30 €" },
                    { name: "Sasse Wacholder", menge: "2 cl", preis: "2,30 €" },
                    { name: "Sasse Kräuterwacholder", menge: "2 cl", preis: "3,00 €" },
                    { name: "Sasse Kakao mit Nuss", menge: "2 cl", preis: "3,30 €" },
                    { name: "Sasse Sechser Naturlikör", menge: "2 cl", preis: "3,30 €" },
                    { name: "Absolut Wodka", menge: "2 cl", preis: "2,90 €" },
                    { name: "Malteser", menge: "2 cl", preis: "2,70 €" },
                    { name: "Jubi", menge: "2 cl", preis: "3,00 €" },
                    { name: "Linie", menge: "2 cl", preis: "3,20 €" },
                    { name: "Fernet Branca", menge: "2 cl", preis: "2,90 €" },
                    { name: "Ramazzotti", menge: "2 cl", preis: "2,70 €" },
                    { name: "Averna", menge: "2 cl", preis: "2,70 €" },
                    { name: "Jägermeister", menge: "2 cl", preis: "2,70 €" },
                    { name: "Nordsturm", menge: "2 cl", preis: "2,70 €" },
                    { name: "Underberg", menge: "2 cl", preis: "2,80 €" },
                    { name: "Grappa", menge: "2 cl", preis: "2,90 €" },
                    { name: "Calvados", menge: "2 cl", preis: "2,80 €" },
                    { name: "Williams mild", menge: "2 cl", preis: "2,80 €" },
                    { name: "Mirabelle mild", menge: "2 cl", preis: "2,80 €" },
                    { name: "Williams", menge: "2 cl", preis: "2,50 €" },
                    { name: "Obstler", menge: "2 cl", preis: "2,50 €" },
                    { name: "Ouzo", menge: "2 cl", preis: "2,70 €" },
                    { name: "Sambuca", menge: "2 cl", preis: "2,70 €" },
                    { name: "Aufgesetzter Waldfrucht", menge: "2 cl", preis: "1,70 €" },
                    { name: "Aufgesetzter Kirsch", menge: "2 cl", preis: "1,70 €" },
                    { name: "Amaretto", menge: "2 cl", preis: "1,70 €" },
                    { name: "Baileys", menge: "2 cl", preis: "2,70 €" }
                ]
            },
            {
                name: "Weinbrand und Whisky",
                getraenke: [
                    { name: "Mariacron", menge: "2 cl", preis: "2,70 €" },
                    { name: "Veterano Osborne", menge: "2 cl", preis: "3,30 €" },
                    { name: "Asbach", menge: "2 cl", preis: "3,30 €" },
                    { name: "Johnnie Walker", menge: "2 cl", preis: "3,20 €" },
                    { name: "Jim Beam", menge: "2 cl", preis: "3,40 €" },
                    { name: "Bellantines", menge: "2 cl", preis: "3,40 €" },
                    { name: "Jameson", menge: "2 cl", preis: "3,50 €" },
                    { name: "Jack Daniels", menge: "2 cl", preis: "3,80 €" }
                ]
            },
            {
                name: "Weinkarte",
                getraenke: [
                    { name: "Weißwein", isHeader: true },
                    { name: "Riesling classic, trocken, feine Säure, fruchtig, anregend", groessen: [{ size: "0,2 l", preis: "5,90 €" }, { size: "Flasche 0,75 L", preis: "26,50 €" }] },
                    { name: "Grauburgunder classic, trocken, feiner eleganter Burgunder", groessen: [{ size: "0,2 l", preis: "5,90 €" }, { size: "Flasche 0,75 L", preis: "26,50 €" }] },
                    { name: "Riesling feinherb, lieblich, frisch-elegant", groessen: [{ size: "0,2 l", preis: "5,90 €" }, { size: "Flasche 0,75 L", preis: "26,50 €" }] },
                    { name: "Grauburgunder feinherb, säurearm, ohne Frische", groessen: [{ size: "0,2 l", preis: "5,90 €" }, { size: "Flasche 0,75 L", preis: "26,50 €" }] },
                    { name: "Bacchus lieblich, aromatisch, fruchtig", groessen: [{ size: "0,2 l", preis: "6,20 €" }, { size: "Flasche 0,75 L", preis: "21,50 €" }] },
                    { name: "Rosé", isHeader: true },
                    { name: "Dornfelder Rosé trocken leicht, anregend", groessen: [{ size: "0,2 l", preis: "5,90 €" }, { size: "Flasche 0,75 L", preis: "26,50 €" }] },
                    { name: "Portugieser Weißherbst halbtrocken schöne Frucht, harmonischer Körper", groessen: [{ size: "0,2 l", preis: "5,90 €" }, { size: "Flasche 0,75 L", preis: "26,50 €" }] },
                    { name: "Rotling sanfte Würze, erfrischend", groessen: [{ size: "0,2 l", preis: "5,90 €" }, { size: "Flasche 0,75 L", preis: "26,50 €" }] },
                    { name: "Rotwein", isHeader: true },
                    { name: "Pinot Noir trocken reif, weich, harmonisch", groessen: [{ size: "0,2 l", preis: "5,90 €" }, { size: "Flasche 0,75 L", preis: "26,00 €" }] },
                    { name: "Dornfelder trocken tiefrot, vollmundig, tanninhaltig", groessen: [{ size: "0,2 l", preis: "5,70 €" }, { size: "Flasche 0,75 L", preis: "19,50 €" }] },
                    { name: "Cuvee M halbtrocken samtig, viel Mundgefühl", groessen: [{ size: "0,2 l", preis: "5,70 €" }, { size: "Flasche 0,75 L", preis: "19,50 €" }] },
                    { name: "Schorle", isHeader: true },
                    { name: "Weißweinschorle", groessen: [{ size: "0,2 l", preis: "4,50 €" }] },
                    { name: "Rotweinschorle", groessen: [{ size: "0,2 l", preis: "4,50 €" }] },
                    { name: "Glas Sekt", groessen: [{ size: "0,1 l", preis: "3,50 €" }] },
                    { name: "Freixenet trocken", groessen: [{ size: "Fl. 0,75 l", preis: "19,50 €" }] },
                    { name: "Freixenet halbtrocken", groessen: [{ size: "Fl. 0,75 l", preis: "19,50 €" }] }
                ]
            },
            {
                name: "Longdrinks",
                getraenke: [
                    { name: "Lillet Wild Berry", menge: "5 cl", preis: "6,90 €" },
                    { name: "Aperol Spritz", menge: "5 cl", preis: "6,90 €" },
                    { name: "Campari Spritz", menge: "5 cl", preis: "6,90 €" },
                    { name: "Wodka Cola 4cl", menge: "4 cl", preis: "6,20 €" },
                    { name: "Wodka-Lemon", menge: "4 cl", preis: "6,20 €" },
                    { name: "Bacardi Cola 4cl", menge: "4 cl", preis: "6,80 €" },
                    { name: "Campari Orange", menge: "4 cl", preis: "5,80 €" },
                    { name: "Gin Tonic 4cl", menge: "4 cl", preis: "6,40 €" },
                    { name: "Amaretto Apfelsaft", menge: "4 cl", preis: "5,40 €" }
                ]
            }
        ]
    },

    // --- ÖFFNUNGSZEITEN -----------------------------------------------------
    oeffnungszeiten: [
        { datum: "Fr, 13.02.2026", zeit: "ab 17.00 Uhr" },
        { datum: "Sa, 14.02.2026", zeit: "ab 17.00 Uhr" },
        { datum: "So, 15.02.2026", zeit: "ab 18.00 Uhr" },

        { datum: "Fr, 20.02.2026", zeit: "ab 17.00 Uhr" },
        { datum: "Sa, 21.02.2026", zeit: "ab 17.00 Uhr" },

        { datum: "Fr, 27.02.2026", zeit: "ab 17.00 Uhr" },
        { datum: "Sa, 28.02.2026", zeit: "ab 17.00 Uhr" },

        { datum: "Fr, 06.03.2026", zeit: "ab 17.00 Uhr" },
        { datum: "Sa, 07.03.2026", zeit: "ab 17.00 Uhr" },
        { datum: "So, 08.03.2026", zeit: "ab 17.00 Uhr" },

        { datum: "Mi, 11.03.2026", zeit: "ab 17.00 Uhr" },
        { datum: "Do, 12.03.2026", zeit: "ab 17.00 Uhr" },
        { datum: "Fr, 13.03.2026", zeit: "ab 17.00 Uhr" },
        { datum: "Sa, 14.03.2026", zeit: "ab 17.00 Uhr" },
        { datum: "So, 15.03.2026", zeit: "ab 12.00 Uhr" },

        { datum: "Mi, 18.03.2026", zeit: "ab 17.00 Uhr" },
        { datum: "Do, 19.03.2026", zeit: "ab 17.00 Uhr" },
        { datum: "Fr, 20.03.2026", zeit: "ab 17.00 Uhr" },
        { datum: "Sa, 21.03.2026", zeit: "ab 17.00 Uhr" },
        { datum: "So, 22.03.2026", zeit: "ab 12.00 Uhr" },

        { datum: "Mi, 25.03.2026", zeit: "ab 17.00 Uhr" },
        { datum: "Do, 26.03.2026", zeit: "ab 17.00 Uhr" },
        { datum: "Fr, 27.03.2026", zeit: "ab 17.00 Uhr" },
        { datum: "Sa, 28.03.2026", zeit: "ab 17.00 Uhr" },
        { datum: "So, 29.03.2026", zeit: "ab 12.00 Uhr" },
	
		{ datum: "Mo, 30.03.2026", zeit: "ab 17.00 Uhr" },
		{ datum: "Di, 31.03.2026", zeit: "ab 17.00 Uhr" },
        { datum: "Mi, 01.04.2026", zeit: "ab 17.00 Uhr" },
		{ datum: "Do, 02.04.2026", zeit: "ab 17.00 Uhr" },

		{ datum: "Fr, 03.04.2026", zeit: "ab 17.00 Uhr" },
        { datum: "Sa, 04.04.2026", zeit: "ab 17.00 Uhr" },
        { datum: "So, 05.04.2026", zeit: "ab 12.00 Uhr" },
        { datum: "Mo, 06.04.2026", zeit: "ab 12.00 Uhr" },
        { datum: "Di, 07.04.2026", zeit: "ab 17.00 Uhr" },
		{ datum: "Mi, 08.04.2026", zeit: "ab 17.00 Uhr" },
		{ datum: "Do, 09.04.2026", zeit: "ab 17.00 Uhr" },
 		{ datum: "Fr, 10.04.2026", zeit: "ab 17.00 Uhr" },
        { datum: "So, 12.04.2026", zeit: "ab 12.00 Uhr" },	
		{ datum: "Mo, 13.04.2026", zeit: "ab 17.00 Uhr" },
		{ datum: "Di, 14.04.2026", zeit: "ab 17.00 Uhr" },
        { datum: "Mi, 15.04.2026", zeit: "ab 17.00 Uhr" },
		{ datum: "Do, 16.04.2026", zeit: "ab 17.00 Uhr" },
 		{ datum: "Fr, 17.04.2026", zeit: "ab 17.00 Uhr" },
        { datum: "Sa, 18.04.2026", zeit: "ab 17.00 Uhr" },
        { datum: "So, 19.04.2026", zeit: "ab 12.00 Uhr" },
		{ datum: "Mo, 20.04.2026", zeit: "ab 17.00 Uhr" },
		{ datum: "Di, 21.04.2026", zeit: "ab 17.00 Uhr" },
        { datum: "Mi, 22.04.2026", zeit: "ab 17.00 Uhr" },
		{ datum: "Do, 23.04.2026", zeit: "ab 17.00 Uhr" },
 		{ datum: "Fr, 24.04.2026", zeit: "ab 17.00 Uhr" },
        { datum: "Sa, 25.04.2026", zeit: "ab 17.00 Uhr" },
        { datum: "So, 26.04.2026", zeit: "ab 12.00 Uhr" },
		{ datum: "Mo, 27.04.2026", zeit: "ab 17.00 Uhr" },
		{ datum: "Di, 28.04.2026", zeit: "ab 17.00 Uhr" },
        { datum: "Mi, 29.04.2026", zeit: "ab 17.00 Uhr" },
		{ datum: "Do, 30.04.2026", zeit: "ab 17.00 Uhr" },
 		{ datum: "Fr, 01.05.2026", zeit: "ab 12.00 Uhr" },
        { datum: "Sa, 02.05.2026", zeit: "ab 17.00 Uhr" },
        { datum: "So, 03.05.2026", zeit: "ab 12.00 Uhr" }
    ],
	

    // --- KONTAKT & IMPRESSUM ------------------------------------------------
    kontakt: {
        adresse: "Laerer Werseufer7, 48157 Münster",
        email: "wersetiger@t-online.de",
        telefon: "0251 381181"
    }
};
