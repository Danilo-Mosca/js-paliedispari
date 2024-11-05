"use strict";
//UTILITIES FUNCTION

/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

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