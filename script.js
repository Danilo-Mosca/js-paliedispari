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
let randomUserNumber, randomPCnumber, evenOdd = "";
/* Richiamo la funzione randomNumber e gli passo come parametri 1 e 5 così da far generare un numero casuale compreso tra 1 e 5
   e lo assegno alla variabile randomPCnumber */
randomPCnumber = randomNumber(1, 5);

// Variabile booleana di controllo del ciclo
checkVariable = false;
// Ciclo che controlla se l'utente ha inserito pari o dispari
while (!checkVariable) {
    evenOdd = alert("Scegli pari o dispari");
    if ((evenOdd.toLowerCase === "pari") || (evenOdd.toLowerCase === "dispari")) {
        // Se vera assegno true a checkVariable ed esco dal ciclo, altrimenti il ciclo continua
        checkVariable = true;
    }
}
checkVariable = false;
// Ciclo che controlla se l'utente ha inserito un numero
while (!checkVariable) {
    randomUserNumber = alert("Scegli un numero compreso tra 1 e 5");
    if (randomUserNumber >= 1 && randomUserNumber <= 5) {
        // Se vera assegno true a checkVariable ed esco dal ciclo, altrimenti il ciclo continua
        checkVariable = true;
    }
}

// Creo la variabile che conterrà la somma dei numeri casuali dell'utente e del pc
const sum = randomPCnumber + randomUserNumber;

/* --------------- Fine esercizio Pari e Dispari --------------- */