// CONSEGNA
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array

const oddNumbers = [];

for (let i = 0; i < 6; i++) {
  let currentNumber = prompt('Inserire un numero');
  currentNumber = parseFloat(currentNumber);
  if (currentNumber % 2 !== 0) {
    oddNumbers.push(currentNumber);
  }
}

console.log(oddNumbers);