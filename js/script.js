//recupero elementi dal DOM
const eleCount = document.getElementById('countdown');

const randomNumbers = document.getElementById('numbers-list');

document.getElementById('instructions').innerText = 'inserisci i numeri che ricordi';

document.querySelectorAll('#answers-form')[0];
// console.log(document.querySelectorAll('#answers-form')[0]);

const arrayNumbers = [];

const timer = 10;

for (let i = 0; i < 5; i++) {
   const numeroCasuale = Math.floor(Math.random() * 50) + 1;
   arrayNumbers.push(numeroCasuale);
   randomNumbers.innerHTML += `<li>${numeroCasuale}</li>`
}







