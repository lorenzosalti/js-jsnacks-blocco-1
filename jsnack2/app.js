// CONSEGNA
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

let firstWord = prompt('Inserire la prima parola');
let secondWord = prompt('Inserire la seconda parola');

if (firstWord.length > secondWord.length) {
  console.log(firstWord);
  console.log(secondWord);
} else {
  console.log(secondWord);
  console.log(firstWord);
}