/*Exercice 2*/
var n = window.prompt("Entrez un chiffre");
function tableMultiplication(n) {
  for (i = 1; i < 11; i++) {
    document.write(i + " x " + n + " = " + n * i + "<br>");
    console.log(i + " x " + n + " = " + n * i);
  }
}
tableMultiplication(n);