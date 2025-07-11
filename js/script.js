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

let count = 9;

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

const eleForm = form[0];
function checkNumbers() {
  let trueNumbers = "";
  let countTrueNumbers = 0;

  for (let i = 0; i < 5; i++) {
    if (arrayNumbers.includes(parseInt(eleForm[i].value))) {
      trueNumbers += eleForm[i].value + ', ';
      countTrueNumbers++;
    }
  }

  const eleMess = document.getElementById("message");
  eleMess.innerText = `Il tuo score è: ${countTrueNumbers}/${arrayNumbers.length}. `;
  if (countTrueNumbers > 0) {
    eleMess.innerText += `(i numeri che hai indovinato sono: ${trueNumbers})`;
  }
}

eleForm[5].addEventListener("click", (e) => {
  e.preventDefault();
  checkNumbers();
});
