let vokabeln = {
    'Unit 1': [
        { wort: 'Brot', fremdsprache: 'Bread' },
        { wort: 'Käse', fremdsprache: 'Cheese' },
        { wort: 'Milch', fremdsprache: 'Milk' },
        { wort: 'Wasser', fremdsprache: 'Water' },
        { wort: 'Fleisch', fremdsprache: 'Meat' },
        { wort: 'Obst', fremdsprache: 'Fruit' }
    ],

    'Unit 2': [
        { wort: 'Tisch', fremdsprache: 'Table' },
        { wort: 'Stuhl', fremdsprache: 'Chair' },
        { wort: 'Bett', fremdsprache: 'Bed' },
        { wort: 'Fenster', fremdsprache: 'Window' },
        { wort: 'Tür', fremdsprache: 'Door' },
        { wort: 'Küche', fremdsprache: 'Kitchen' },
    ],
    'Unit 3': [
        { wort: 'Hund', fremdsprache: 'Dog' },
        { wort: 'Katze', fremdsprache: 'Cat' },
    ],
};

interaktiveVokabelHinzufuegung()
function interaktiveVokabelHinzufuegung() {
    let kategorie = prompt("Bitte geben Sie den Namen der Kategorie ein (z.B. 'Unit 4' oder 'Unit 1'):");


    let deutschesWort = prompt(`Geben Sie das deutsche Wort für die Kategorie '${kategorie}' ein:`);


    let fremdSpracheWort = prompt(`Geben Sie die Übersetzung von '${deutschesWort}' ein:`);

    const neueVokabel = {
        wort: deutschesWort.trim(),
        fremdsprache: fremdSpracheWort.trim()
    };

    vokabeln[kategorie].push(neueVokabel);
    console.log(`Vokabel '${deutschesWort}' zu Kategorie '${kategorie}' hinzugefügt.`);

}

vokabelHinzufuegenManuell('Unit 4', 'Auto', 'Car');

function vokabelHinzufuegenManuell(kategorie, deutschesWort, fremdSpracheWort) {
    const neueVokabel = { wort: deutschesWort, fremdsprache: fremdSpracheWort };
    if (vokabeln.hasOwnProperty(kategorie)) {
        vokabeln[kategorie].push(neueVokabel);
    } else {
        vokabeln[kategorie] = [neueVokabel];
    }
}


console.log('\n--- Aktueller Stand des Vokabel-Objekts ---');
console.log(vokabeln);