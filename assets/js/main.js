// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la
//  parola inserita è palindroma

/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

// Generiamo un numero random 
(sempre da 1 a 5) per il computer (usando una funzione).

Sommiamo
 i due numeri Stabiliamo se la somma dei due numeri è 
pari o dispari (usando una funzione) Dichiariamo chi ha vinto.*/
//-------------------------------//

//  Chiediamo all'utente di scegliere pari o dispari e inserire un numero da 1 a 5  ---------- OK

// Generiamo un numero casuale per il computer                                      -----------  OK

// Funzione per stabilire se un numero è pari o dispari                             ----------- OK

// Sommiamo i due numeri

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

// function isEven(num) {
//   if (num % 2 == 0) {
//     return true;
//   }
//   return false;
// }

// let num = Number(prompt("inserisci il numero"));

// if (isEven(num)) {
//   console.log("hai scelto pari");
// } else {
//   console.log("hai scelto dispari");
// }
let scegli = prompt("inserisci un numero pari o dispari ");
let numero = parseInt(prompt("inserisci un numero da 1 a 5 "));
let risultato = numero % 2 === 0;

if (scegli === "pari" || scegli === "dispari") {
  if (numero >= 1 && numero <= 5) {
    if ((scelta = risultato)) {
      console.log("hai vinto");
    } else {
      console.log("hai perso");
    }
  } else {
    console.log("numero non valido");
  }
} else {
  console.log("scelta non valida");
}
