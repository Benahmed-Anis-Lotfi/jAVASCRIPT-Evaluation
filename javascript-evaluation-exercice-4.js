var PU = window.prompt("Prix unitaire :");
var QTECOM = window.prompt("Quantité commandée :");
var TOT = PU * QTECOM;
var REM = 0;
if (TOT > 100) {
  if (TOT > 200) {
    REM = TOT * 0.1;
  } else {
    REM = TOT * 0.05;
  }
}
if (TOT - REM > 500) {
  var PORT = 0;
} else {
  var PORT = (TOT - REM) * 0.02;
  if (PORT < 6) {
    PORT = 6;
  }
}

var PAP = TOT - REM + PORT;
console.log(PAP);
alert(
  "Le prix de votre commande est de : " +
    TOT +
    " €.\n" +
    "Le montant de votre remise équivaut à : " +
    REM +
    "\n Le montant de vos frais de port s'élève à : " +
    PORT +
    " €" +
    "\n La somme totale dûe est : " +
    PAP +
    " €."
);