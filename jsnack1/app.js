// CONSEGNA
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

let firstNumber = prompt('Inserire il primo numero');
let secondNumber = prompt('Inserire il secondo numero');

firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);

if ((Number.isNaN(firstNumber)) || (Number.isNaN(secondNumber))) {
  console.log('Valori non validi')
} else if (firstNumber > secondNumber) {
  console.log(firstNumber);
} else {
  console.log(secondNumber);
}