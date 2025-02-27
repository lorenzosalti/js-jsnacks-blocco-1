// CONSEGNA
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let total = 0;

for (let i = 0; i < 10; i++) {
  let currentNumber = prompt('Inserire un numero');
  currentNumber = parseFloat(currentNumber);
  total = total + currentNumber;
}

console.log(total);