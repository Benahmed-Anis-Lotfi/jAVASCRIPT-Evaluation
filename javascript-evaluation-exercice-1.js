var age = 0;
var jeune = 0;
var entre = 0;
var vieux = 0;
var n = 0;

while (age < 100) {
  age = window.prompt("Age n°" + (n + 1) + " : ");
  n = n + 1;
  if (age < 20) {
    jeune = jeune + 1;
  } else {
    if (age < 40) {
      entre = entre + 1;
    } else {
      vieux = vieux + 1;
    }
  }
}

document.write(
  "Il y a " + jeune + " personnes qui ont un âge inférieur à 20 ans. " + "<br>"
);
document.write(
  "Il y a " +
    entre +
    " personnes qui ont un âge compris entre 20 ans et 40 ans." +
    "<br>"
);
document.write(
  "Il y a " + vieux + " personnes qui ont un âge supérieur à 40 ans." + "<br>")