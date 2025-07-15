//recupero gli elementi del dom che mi servono
const numberList = document.getElementById("numbers-list");
const form = document.getElementById("answers-form");
const inputs = document.querySelectorAll("input");
const countdownElement = document.getElementById("countdown");
const message = document.getElementById("message");
const instructions = document.getElementById("instructions");

//recupero bottone
const button = document.querySelector("button");

//definizione della funzione che genera i numeri random
const generateRandomNumbers = (min, max) => {
  //definisco un array vuoto in cui mettere i numeri generati
  const random = [];

  //ciclo fino a che l'array random non abbia lunghezza 5
  while (random.length < 5) {
    //genero il numero casuale
    const number = Math.floor(Math.random() * (max - min + 1)) + min;

    //obiettivo: evito numeri duplicati nell'array random.
    if (random.includes(number) === false) {
      //inserisco il numero generato nell'array.
      random.push(number);
    }
  }

  return random;
};

//genero i numeri randomici
const numbers = generateRandomNumbers(1, 50);

//definisco la variabile che contiene i secondi
let time = 10;

//mostro i numeri a video
//ciclo l'array numbers
for (let i = 0; i < numbers.length; i++) {
  numberList.innerHTML += `<li>${numbers[i]}</li>`;
}

//mostro il valore time dentro l'elemento countdown
countdownElement.innerText = time;

//definisco il setInterval che mi scala i secondi e mi nasconde i numeri per farmi apparire la form
const countdown = setInterval(() => {
  //decremento valore di time
  time--;
  countdownElement.innerText = time;

  //annullo setInterval quando time arriva a 0, mostro i campi input, nascondo i numeri e cancello intervallo.
  if (time === 0) {
    clearInterval(countdown);

    //rimuovo la classe d-none a form.
    form.classList.remove("d-none");

    //aggiungo la classe d-none a numbers-list.
    numberList.classList.add("d-none");
    instructions.innerText = `Inserisci i numeri che ricordi e visualizza il risultato`;
  }
}, 1000);

//definisco la funzione che al click del pulsante mi recupera i numeri che l'utente ha inserito e controlla quali sono presenti nell'array di quelli generati casualmente.
const confirm = () => {
  //definisco la variabile che mi contiene i numeri inseriti dall'utente
  const userNumbers = [];

  //definisco un nuovo array, in cui vado ad inserire solo i numeri che l'utente ha indovinato
  const correctAnswers = [];

  //ciclo inputs per recuperare i valori inseriti dall'utente e metterli nell'Array userNumbers.
  for (let i = 0; i < inputs.length; i++) {
    //inserisco il valore (trasformato in numero) all'interno dell'array userNumbers
    userNumbers.push(parseInt(inputs[i].value));
  }

  //ciclo l'array userNumbers e confronto l'elemento attualmente ciclato con quelli presenti nell'array dei numeri generati casualmente.
  for (let i = 0; i < userNumbers.length; i++) {
    if (numbers.includes(userNumbers[i]) === true) {
      correctAnswers.push(userNumbers[i]);
    }
  }

  //mostriamo il messaggio all'utente.
  message.classList.remove('text-danger');
  message.innerHTML = `
  <h1 class= 'mt-3'>Risultato:</h1>
  <table border="1" class= 'col-12 table-bordered mt-3'>
      <thead>
        <tr>
          <th>Quanti valori su 5</th>
          <th>Numeri indovinati</th>
          <th>Numeri giusti</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${correctAnswers.length}</td>
          <td>${correctAnswers}</td>
          <td>${numbers}</td>
        </tr>
      </tbody>
    </table>`;
  // `Hai indovinato ${correctAnswers.length} valori su 5!! numeri che hai indovinato:(${correctAnswers}) I numeri giusti erano questi: ${numbers}`;
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  confirm();
});
