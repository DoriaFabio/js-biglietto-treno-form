"use strict";
console.clear();
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// const km = prompt("Inserisci il numero di km");
// console.log("L'utente vuole percorrere " + km + " km");
// const age = prompt("Inserisci l'età");
// console.log("L'utente ha " + age + " anni");
// let prezzoTotale = 0.21*km;
// let prezzoScontato;
// let messaggio = " ";
// if (age<=18) {
//     prezzoScontato = prezzoTotale - (prezzoTotale * 0.2); 
//     messaggio = ("Il prezzo scontato per l'utente minorenne è ");
//     console.log (messaggio + prezzoScontato.toFixed(2) + " euro");
// } else if (age>=65) {
//     prezzoScontato = prezzoTotale - (prezzoTotale * 0.4); 
//     messaggio = ("Il prezzo scontato per l'utente over 65 è ");
//     console.log (messaggio + prezzoScontato.toFixed(2) + " euro");
// } else {
//     console.log("Il prezzo totale è " + prezzoTotale + " euro");
// }

const myform = document.getElementById("login");
console.log(myform);
myform.addEventListener("submit", function(event) {
    event.preventDefault();
});