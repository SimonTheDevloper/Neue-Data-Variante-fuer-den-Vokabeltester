let vokabeln = {
    'Unit 1': [
        { wort: 'Brot', fremdsprache: 'Bread' },
        { wort: 'Käse', fremdsprache: 'Cheese' },
        { wort: 'Milch', fremdsprache: 'Milk' },
        { wort: 'Wasser', fremdsprache: 'Water' },
        { wort: 'Fleisch', fremdsprache: 'Meat' },
        { wort: 'Obst', fremdsprache: 'Fruit' },
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

let alleVokabelnInEinzelnenObjektArray = Object.values(vokabeln);  //gibt alle Werte eines Objekts als Array zurück
let alleVokabelKategorien = Object.keys(vokabeln); // Alle VokabelKategorien
let allesInEinemArray = alleVokabelnInEinzelnenObjektArray.flat(); // Alle VokabelObjekte in nem Array
let alleVokabelWörter = allesInEinemArray.map(vokabeln => vokabeln.wort); // gibt alle Vokabelwörter 
let qwe = Object.fromEntries(Object.entries(vokabeln));
console.log(qwe)
//let alleWörterMitderKategoirUnit1 = Object.fromEntries(vokabeln);
let gewünscht = ["Unit 1", "Unit 2"];

let gefiltert = Object.fromEntries(
    Object.entries(vokabeln).filter(([key]) => gewünscht.includes(key))
);

let gefilterteAlleObjekteInNemArray = Object.values(gefiltert).flat();
let alleWörterZuDieserKategorie = gefilterteAlleObjekteInNemArray.map(alleWörter => alleWörter.wort);
let a
console.log(gefilterteAlleObjekteInNemArray);
console.log(gefiltert);

//console.log(alleWörterMitderKategoirUnit1)
console.log(alleVokabelWörter);
console.log(allesInEinemArray);
console.log(alleVokabelKategorien);
console.log(vokabeln['wort']); // Alle Vokabeln wörter
console.log(vokabeln['Unit 1'][1]);

// hinzufügen Teil 
