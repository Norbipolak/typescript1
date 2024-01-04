/*
ha utánaírjuk, hogy :string akkor a firstName változónak csak string lehet az értéke, pl. boolean vagy number nem
*/

/*
!!!!!!!!!!!!!!!!!!!!Explicit típusmeghatározás 
azért explicit, mert jelöltük 
*/
const firstName:string = "Péter";

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
const dohanyzikE:boolean = false;
//number
const age:number = 27;
/*
tömb
meg lehet határozni, hogy milyen tömböt szeretnénk létrehozni pl. string, akkor ez egy olyan tömb lesz, amiben csak stringek tárolhatóak
*/
const fruits:string[] = ["alma", "banán", "citrom", "dinnye", "eper"];

//number tömb, amiben csak numberek tárolhatunk
const numbers:number[] = [1,2,3,4,5,6,7,8,9,10, true];
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
let barmi:any = "asdf";
barmi = true;
barmi = 9;
/*
any egy olyan típus, ami bármilyen értéket magába tud foglalni 
*/

//Mi az oka, annak, hogy típusokat tudunk meghatározni ->

function add(a, b) {
    return a + b;
}
//mivel ez egy add függvény ezért logikus, hogy számok összeadására szeretnénk használni de -> 

const result = add("kescke", "sajt");
/*ez már nem számok összeadására, hanem összefüzésre, amire a concat nevű függvény lenne alkalmas 
szóval itt a concat függvény kéne használni, de a két függvény közt jelen pillanatban semmi különbség nincsen
várnak két paramétert és a plusz operaátort használja közöttük 
*/
function concat(a, b) {
    return a + b;
}

/*
különbség közöttük typescriptben
->
*/

function add(a:number, b:number){
    return a + b;
}

function concat(a:string, b:string) {
    return a + b;
}
//és ebben az esetben ha az add-at próbálnánk meg használni stringekkel 
/*const result = add("kecske", "sajt");
/*nem sikerülne és ha lefordítanánk, akkor dobna egy hibaüzenetet, 
lefordítható, mert a javascriptet ez nem érdekli 
csak akkor is ott van a hibaüzenet és egyértelmübb az, hogy milyen típusokat használunk 
*/
const result = add(1, 2);
const result2 = concat("Hello", "xy");//itt sem határozhatunk meg number vagy boolean paramétereket, stringeket kell

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
function add(a:number, b:number):number { //ha ide is azt irom, hogy :number, akkor akkor muszály egy numbert visszaadnia
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

function greetings(partOfTheDay:string, name:string):void {
    //return ""; // nem jó, mert ha void, akkor nem adhatunk vissza semmit sem
    //return // csak kilépési értékként használhatjuk, visszaadni nem lehet vele semmilxen értéket, csak kilépési pont
    // meg most így semmi értelme nem lenne, mert mielőtt lefutna már ki is léptünk a függvényből
    console.log(`Jó ${partOfTheDay} ${name}!`)   
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

function multiply(a:number, b:number):number|never {
    if(typeof a !== "number" || typeof b !== "number")
    throw "Nem megfelelőek a bemeneti paraméterek!";
    return a * b;
}
//a multiply függvény vár két numbert és egy numbert vagy nevert add vissza 
/*
A never típus az akkor jön itt vissza és az a lényege, hogy amikor soha nem kap értéket 
if-ben -> 
ha a-nak vagy a b-nek a type-ja nem number, akkor dobunk egy hibát a throw-val és akkor 
ez lesz a never típus, mert ebben az esetben soha nem adunk vissza semmilyen értéket 
hiszen leáll a programnak a futása a throw-val, de azt is jelöljük, hogy nem adunk vissza semmilyen értéket -> never
*/

//változónak is meg tudunk adni never típust 
let a:never = 6;
/*
itt az a probléma, hogy nincs olyan érték, amit meg tudunk neki adni
ennek üresen kell maradnia ->
*/
let a:never;
/*
const pl. nem is tudunk megadni nevert, mert kell, hogy értéket kapjon
a let-et meghatározhatjuk de ebben az esetben semmilyen értelme nincsen, hiszen 
soha nem kaphat értéket 

de ez igy már müködőképes
*/
let a:never|number = multiply(5, 6);
/**********************************************************************************************************************************/
/*
any -> minden típus 
never -> semmilyen
void -> nincsen visszatérési érték, nem ugy mint a függvénynél, ahol lennie kell return - visszatérési értéknek 

functionoknek nem kötelezően, de meghatározhatjuk, hogy milyen típus kapjon a paraméterek és a visszatérési érték
*/

/*
Objektumok kezelése 
*/
const Car = {
    brand:"Volvo",
    type:"S40",
    color:"blue",
    year:1999
};

//->

const Car:{brand:string, type:string, color:string, year:number} = {
    /*itt határozzuk meg, hogy ennek az objektumnak milyen kulcsokkal kell rendelkeznie 
    és azok a kulcsok milyen típusuak legyenek */
    brand:"Volvo",
    type:"S40",
    color:"blue",
    year:1999
};

//ez hasznos pl. regisztráció esetében 

const User:{firstName:string, lastName:string, email:string, birthday:number, pass:string} = {
    //ezek mind szükségesek a regisztrációhoz
    firstName:"János",
    lastName:"Horváth",
    email:"horvath.janos@citromail.hu",
    birthDay:1996,
    pass:"titkosjelszó"
    //innentől kezdve biztosan kell, hogy tartalmazza azokat az adatokat, amik a regisztrációhoz szükségesek
};

/*
ha csinálunk egy függvényt és bekérjük a userDatat, amit elöbb csináltunk 
és a userDatanak is meg tudom határozni, hogy ez egy olyan objektum legyen, 
hogy biztos, hogy mindegyik kulccsal rendelkezik ami itt van 
*/
function registration(userData:{firstName:string, lastName:string, email:string, pass:string}){
/*ha Userben van birthDay, ennek a paraméterében viszont nincs az nem probléma 
több lehet benne de kevesebb nem 
function registration(userData:{firstName:string, lastName:string, email:string, pass:string, passAgain:string}){
    -> 
ez így már nem lesz jó a passAgain:string kiegészítés miatt
több lehet benne de kevesebb nem 
*/
}

registration(User); // nem dolgozzuk ki a függvény testét csak megadjuk neki a user-t 

//mi van ha az egyik paraméter opcionális pl.birthDay ->

function registration(userData:{
    firstName:string, 
    lastName:string, 
    email:string, 
    birthDay?:number,//nem kötelező paraméter (nullable)
    pass:string}){

}

/*
A kérdőjel annyit tesz, hogy egy nem kötelező paraméter 
ha a Userben nem csináltunk volna birthDay-t és ide a functionba ugy adnám át ezt a paramétert, 
hogy ? jellel, az azért nem probléma, mert az egy nem kötelező paraméter (nullable), lehet az 
az értéke, hogy nulla, semmi vagy undefined

Összefoglalva ha ott van a ? jel, akkor jó, ha nincsen, akkor viszont nem
hasznos, mert sokszor előfordulhat, hogy opcionális paraméterek vannak 
*/