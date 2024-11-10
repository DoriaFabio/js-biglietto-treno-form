"use strict";
console.clear();
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// Recuperiamo gli elementi di interesse dal FORM
const nameField = document.getElementById("nome-field");
const surnameField = document.getElementById("cognome-field");
const kmField = document.getElementById("km-field");
const etàField = document.getElementById("età-field");
const myform = document.querySelector("form");
// Recuperiamo gli elementi di interesse dal biglietto da stampare
const myname = document.getElementById("nome");
const mysurname = document.getElementById("cognome");
const km = document.getElementById("km");
const età = document.getElementById("età");
const ticket = document.getElementById("ticket");
const prezzoScontato = document.getElementById("prezzoScontato");
const prezzoTot = document.getElementById("prezzoTotale");

console.log(kmField);
// All'invio del form, aggiorniamo i valori del biglietto
myform.addEventListener("submit", function (event) {
    event.preventDefault();
    ticket.classList.remove("d-none");
    myname.innerHTML = nameField.value;
    mysurname.innerHTML = surnameField.value;
    km.innerHTML = kmField.value;
    età.innerHTML = etàField.value;
    // Calcolo prezzo
    let prezzoTotale = 0.21 * km.innerHTML;
    console.log(prezzoTotale);
    if (età.innerHTML < "18") {
        const priceMin = prezzoTotale - (prezzoTotale * 0.2);
        prezzoScontato.innerHTML = "Sei minorenne quindi il prezzo è scontato del 20%: " + priceMin.toFixed(2) + "€";
        prezzoTot.className = "cancella";
        prezzoTot.innerHTML = "Costo totale: " + prezzoTotale;
    } else if (età.innerHTML >= "18" && età.innerHTML < "65") {
        prezzoScontato.innerHTML = "Il prezzo è " + prezzoTotale;
        prezzoTot.className = "d-none";

    } else if (età.innerHTML >= "65") {
        const priceSen = prezzoTotale - (prezzoTotale * 0.4);
        prezzoScontato.innerHTML = "Sei OVER65 quindi il prezzo è scontato del 40%: " + priceSen.toFixed(2) + "€";
        prezzoTot.className = "cancella";
        prezzoTot.innerHTML = "Costo totale: " + prezzoTotale;
        
    }
});

// const myform = document.getElementById("login");
// console.log(myform);
// myform.addEventListener("submit", function(event) {
//     event.preventDefault();
// });