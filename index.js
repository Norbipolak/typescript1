/*
ha utánaírjuk, hogy :string akkor a firstName változónak csak string lehet az értéke, pl. boolean vagy number nem
*/
/*
!!!!!!!!!!!!!!!!!!!!Explicit típusmeghatározás
azért explicit, mert jelöltük
*/
const firstName = "Péter";
//const lastName:string = true; // akkor alá fogja húzni a lastName-t, mert elvileg csak stringet kaphat értékként
// ezt a hibaüzenetet fogjuk kapni -> type 'boolean' is not assignable to type 'string'
/*
typescriptet nem tudunk önmagában futtatni, tehát a böngésző nem tudja értelmezni a typescript kódot
magát a színtatktikát, ezért muszály lefordítani, ahhoz, hogy müködjön
->
tsc index.ts --target ES2022 és kapunk egy JavaScript fájlt

ES -> echmascript 2022-es szabvány, echmascript a javascriptnek az alapja, megvalósításait tartalmazza
van két nagy a firefox és a chrome böngészők és mindkettő egy kicsit máshogy kezeli ezt a dolgot, de
alapvetően az echmascript szabványai müködnek
2022 -> 2022-es szabványa
*/
/*
Különbség a var, const és a let között
a var az blokkon kivül is elérhető abban az esetben ha a blokkon belül definiáltuk
ami egy hibás müködés, mert a blokk szintű változónak csak a blokkon belül kellene
elérhetőnek lennie
*/
//boolean
const dohanyzikE = false;
//number
const age = 27;
/*
tömb
meg lehet határozni, hogy milyen tömböt szeretnénk létrehozni pl. string, akkor ez egy olyan tömb lesz, amiben csak stringek tárolhatóak
*/
const fruits = ["alma", "banán", "citrom", "dinnye", "eper"];
//number tömb, amiben csak numberek tárolhatunk
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, true];
/*
ha megpróbálunk valamilyen másfajta értéket tárolni, akkor azt rögtön alá is húzza
de ha ezt lefordítjuk, akkor kapunk egy hibaüzenetet de valójában meg fog jelenni a javascriptben és nem zavarja,
mert a javascriptben nincsenek ilyen deklarált típusok, mert egy gyengén típusos nyelv
de typescripten belül hibának minősül
*/
/*
!!!!!!!!!!!!!!!implicit típusmeghatározás
*/
let lastName = "Szabó";
/*
mivel let ezért felül tudjuk írni
és azt megtehetjük, hogy felülírásnál az érték egy másik string lesz
*/
lastName = "Kiss";
//de azt már nem csinálhatom meg ->
lastName = true;
/*
mert egy implicit stílusdeklaráció ment végbe, és az imlicit stílusmeghatározás innentől kezdve meghatározza
akkor is, ha nem írtuk ki
*/
/*
!!!!!!!!!ha nem tudom, hogy milyen típusú lesz a változóm, akkor csinálhatjuk ezt -> any
*/
let barmi = "asdf";
barmi = true;
barmi = 9;
/*
any egy olyan típus, ami bármilyen értéket magába tud foglalni
*/
//Mi az oka, annak, hogy típusokat tudunk meghatározni ->
/*function add(a, b) {
    return a + b;
}
//mivel ez egy add függvény ezért logikus, hogy számok összeadására szeretnénk használni de ->

const result = add("kescke", "sajt");
/*ez már nem számok összeadására, hanem összefüzésre, amire a concat nevű függvény lenne alkalmas
szóval itt a concat függvény kéne használni, de a két függvény közt jelen pillanatban semmi különbség nincsen
várnak két paramétert és a plusz operaátort használja közöttük
*/
/*function concat(a, b) {
    return a + b;
}

/*
különbség közöttük typescriptben
->
*/
function add(a, b) {
    return a + b;
}
function concat(a, b) {
    return a + b;
}
//és ebben az esetben ha az add-at próbálnánk meg használni stringekkel 
/*const result = add("kecske", "sajt");
/*nem sikerülne és ha lefordítanánk, akkor dobna egy hibaüzenetet,
lefordítható, mert a javascriptet ez nem érdekli
csak akkor is ott van a hibaüzenet és egyértelmübb az, hogy milyen típusokat használunk
*/
const result = add(1, 2);
const result2 = concat("Hello", "xy"); //itt sem határozhatunk meg number vagy boolean paramétereket, stringeket kell
/*
Szintaktikailag nagyon hasonló, mint a javascript, ugyanazokat a függvényket és metódusokat
tudjuk használni, mivel ez lefordul egy javascriptre
és ott már nincsen különbség a néven kivül az add és a concat között
javascriptben
->
function add(a, b) {
    return a + b;
}
function concat(a, b) {
    return a + b
*/
/*
Ha meg van nyitva a ts meg a js is, akkor a vs code aláhúzza, mintha már kétszer szerepelne
de ez mindegy, úgyis, ha hivatkozunk, akkor a js fájt fogjuk belinkelni
csak addig látjuk ezt a hibaüzenetet, amíg be nem zárjuk az egyiket
**************************************************************************************************************************************/
/*
Nem csak a paramétereknek tudunk típust biztosítani, hanem a visszatérési értéknek is
->
*/
/*function add(a:number, b:number):number { //ha ide is azt irom, hogy :number, akkor akkor muszály egy numbert visszaadnia
    return a + b;
}
const result:string = add(1, 2);//akkor nem lesz jó, mert az add egy numbert add vissza nem egy stringet
const result:number = add(1, 2);//akkor így már jó lesz

function concat(a:string, b:string):string { //ha ide azt irom, hogy :string, akkor akkor muszály egy stringet visszaadnia
    return a + b;
}
const result2:string = concat("Hello", "xy");

/*
de egy változónak nem csak egy típust tudunk megadni hanem többet is -> union type(több typust is megadhatunk a változónak)
*/
//const result:number|boolean|object = add(1, 2);//ez a változó egy numbert, booleant és objektet foglalhat magába 
/*******************************************************************************************************/
//mi van abban az esetben, ha nincsen visszatérési érték 
function greetings(partOfTheDay, name) {
    //return ""; // nem jó, mert ha void, akkor nem adhatunk vissza semmit sem
    //return // csak kilépési értékként használhatjuk, visszaadni nem lehet vele semmilxen értéket, csak kilépési pont
    // meg most így semmi értelme nem lenne, mert mielőtt lefutna már ki is léptünk a függvényből
    console.log(`Jó ${partOfTheDay} ${name}!`);
}
/*
Eljárásnál hagyhatom üresen vagy azt is mondhatom, hogy void, mert a void azt jelenti, hogy eljárás
és ilynekor, nem szükséges visszadni visszatérési értéket
void -> eljárás

de ha van :string, :object vagy :any, akkor a típusnak megfelelő értéket kell visszadnunk
function add(a:number, b:number):number {
    return ""; ez, így nem müködne, mert miszály numbernek lennie a visszatérési értéknek
}
*/ 
