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

// Creo le variabili che conterranno il numero casuale dell'utente (randomUserNumber), del pc (randomPCnumber) e la scelta pari e dispari dell'utente (evenOdd)
let randomUserNumber, randomPCnumber, userEvenOdd = "";
/* Richiamo la funzione randomNumber e gli passo come parametri 1 e 5 così da far generare un numero casuale compreso tra 1 e 5
   e lo assegno alla variabile randomPCnumber */
randomPCnumber = randomNumber(1, 5);

// Variabile booleana di controllo del ciclo
let checkVariable = false;
// Ciclo che controlla se l'utente ha inserito pari o dispari
while (!checkVariable) {
    // Assegno a userEvenOdd il valore inserito dall'utente e lo rendo con caratteri tutti minuscoli
    userEvenOdd = prompt("Scegli pari o dispari").toLowerCase();
    if ((userEvenOdd === 'pari') || (userEvenOdd === 'dispari')) {
        // Se vera assegno true a checkVariable ed esco dal ciclo, altrimenti il ciclo continua
        checkVariable = true;
    }
    else {
        alert("Hai inserito un valore errato, devi inserire \"pari\" o \"dispari\", ritenta!");
    }
}
checkVariable = false;
// Ciclo che controlla se l'utente ha icanserito un numero
while (!checkVariable) {
    // Chiedo all'utente di inserire un numero compreso tra 1 e 5 e faccio il casting ad intero con parseInt
    randomUserNumber = parseInt(prompt("Scegli un numero compreso tra 1 e 5"));
    if (randomUserNumber >= 1 && randomUserNumber <= 5) {
        // Se vera assegno true a checkVariable ed esco dal ciclo, altrimenti il ciclo continua
        checkVariable = true;
    }
    else {
        alert("Non hai inserito un numero compreso tra 1 e 5, ritenta!");
    }
}

// Creo la variabile che conterrà la somma dei numeri casuali dell'utente e del pc
const sum = randomPCnumber + randomUserNumber;
/* Passo alla funzione isEven() la somma dei numeri casuali per vedere se sono pari o dispari e assegno 
il valore restituito dalla funzione alla variabile numberEvenOdd */
const numberEvenOdd = isEvenOdd(sum);

// If che decreta il vincitore
if (numberEvenOdd.toLowerCase === userEvenOdd.toLowerCase) {
    console.log("La somma di " + randomPCnumber + " + " + randomUserNumber + " è " + numberEvenOdd + ". Complimenti hai vinto!");
}
else {
    console.log("La somma di " + randomPCnumber + " + " + randomUserNumber + " è " + numberEvenOdd + ". Ritenta sarai più fortunato!");
}
/* --------------- Fine esercizio Pari e Dispari --------------- */