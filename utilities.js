"use strict";
//UTILITIES FUNCTION


/* Esercizio: Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

//FUNZIONE PALIDROMA
/**
 * 
 * @param {string} word
 * @returns boolean
 * 
 * @abstract Ritorna true se word è una parola palindroma, false se non lo è 
 */

function palidroma(word) {
    // Variabile stringa che conterrà la parola al contrario
    let reversedWord = "";
    // Flag di controllo che restituirà true o false se la parola è palindroma o meno
    let flag = false;

    // Ciclo che inverte al contrario la parola (word) passata come parametro
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
        // console.log(reversedWord);
    }

    // If che controlla se la parola al contrario è palindroma (per sicurezza prima trasformo tutti i caratteri delle parole in minuscolo)
    if (word.toLowerCase() === reversedWord.toLowerCase()) {
        flag = true;
    }
    return flag;
}

/* Esercizio: Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due num */

//FUNZIONE RANDOMNUMBER
/**
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 * 
 * @abstract Ritorna un numero casuale compreso tra min e max
 */
function randomNumber(min, max) {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
}

//FUNZIONE ISEVEN (se pari)
/**
 * @param {Number} number
 * @returns {boolean}
 * 
 * @abstract Ritorna true se il parametro number passato è pari, false se dispari
 * 
 */
function isEven(number) {
    let isEven = false;
    if (number % 2 === 0) {
        isEven = true;
    }
    return isEven;
}