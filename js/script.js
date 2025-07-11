//recupero elementi dal DOM
const eleCount = document.getElementById('countdown');

const randomNumbers = document.getElementById('numbers-list');

const istruzioni = document.getElementById('instructions');

document.querySelectorAll('#answers-form')[0];
// console.log(document.querySelectorAll('#answers-form')[0]);

const arrayNumbers = [];

//creato numeri casuali
for (let i = 0; i < 5; i++) {
   const numeroCasuale = Math.floor(Math.random() * 50) + 1;
   arrayNumbers.push(numeroCasuale);
   randomNumbers.innerHTML += `<li>${numeroCasuale}</li>`;
}

let count = 10;

//creazione del timer 
const timer = setInterval(() => {
    if(count === 0) {
        clearInterval(timer);
     istruzioni.innerText = 'inserisci i numeri che ricordi'; 
    } 
    eleCount.innerHTML = count;
    count--;
}, 1000);









