// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la
//  parola inserita è palindroma

/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random 
(sempre da 1 a 5) per il computer (usando una funzione). Sommiamo
 i due numeri Stabiliamo se la somma dei due numeri è 
pari o dispari (usando una funzione) Dichiariamo chi ha vinto.*/
//-------------------------------//

//strumenti :
// prompt
// function
// maybe 'for'
// if

//-------------------------------//

//  Chiediamo all'utente di scegliere pari o dispari e inserire un numero da 1 a 5  ---------- OK

// Generiamo un numero casuale per il computer                                      -----------  OK

// Funzione per stabilire se un numero è pari o dispari                             ----------- OK

// Sommiamo i due numeri
// Stabiliamo se la somma è pari o dispari
// Dichiariamo il vincitore

//---------------------------------------------------------------------//
// -------------------ESERCIZIO PARI E DISPARI ------------------------//
//---------------------------------------------------------------------//

// -------------------Generiamo numero casuale per il Pc ------------------------//
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumber = getRandomInteger(1, 5);
console.log(randomNumber);

//-----------------L’utente sceglie pari o dispari--inserisce un numero da 1 a 5.------------//

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  }
  return false;
}

let scegli = Number(prompt("inserisci un numero pari o dispari "));
let numero = parseInt(prompt("inserisci un numero da 1 a 5 "));

if (isEven(scegli)) {
  console.log("hai scelto un numero pari");
} else {
  console.log("hai scelto un numero dispari");
}
