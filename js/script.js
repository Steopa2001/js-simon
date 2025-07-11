//recupero elementi dal DOM
const eleCount = document.getElementById("countdown");

const randomNumbers = document.getElementById("numbers-list");

const istruzioni = document.getElementById("instructions");

const form = document.querySelectorAll("#answers-form");

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
  if (count === 0) {
    //stoppato il timer appena arriva a 0
    clearInterval(timer);
    //cambio testo nel DOM 
    istruzioni.innerText = "inserisci i numeri che ricordi";
    //ho rimosso il display none del dorm nel DOM
    form[0].classList.remove("d-none");
    //ho rimosso la lista dei numeri casuali nel DOM
    randomNumbers.classList.add("d-none");
  }
  eleCount.innerHTML = count;
  count--;
}, 1000);
