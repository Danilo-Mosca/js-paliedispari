"use strict";
console.clear();

/* --------------- Esercizio Palidroma --------------- */

// Chiedo all'utente di inserire una parola è la assegno alla costante word
const word = prompt("Inserisci una parola");

// Passo la parola alla funzione che mi restituirà true se palindroma, 
// false se non lo è e la assegno ad una variabile di controllo
const wordPalindroma = palidroma(word);
// console.log(wordPalindroma);

// If che restituisce se true se la parola è palidroma false se non lo è
if (wordPalindroma) {
    console.log("La parola che hai inserito è palidroma!");
}
else {
    console.log("La parola che hai inserito non è palidroma!");
}
/* --------------- Fine esercizio Palidroma --------------- */



/* --------------- Esercizio Pari e Dispari --------------- */

/* --------------- Fine esercizio Pari e Dispari --------------- */