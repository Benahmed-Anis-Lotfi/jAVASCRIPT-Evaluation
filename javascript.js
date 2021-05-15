// var nom = window.prompt("Saisissez votre nom");
// var prenom = window.prompt("Saisissez votre prénom");

// document.write("Votre nom est : " + nom + "<br>");
// document.write("Votre prénom est : " + prenom + "<br>");

// var homme = window.confirm("Etes vous un homme ? ");
// if (homme == true) {
//   document.write("Votre genre est : Homme" + "<br>");
// } else {
//   document.write("Votre genre est : Femme" + "<br>");
// }

// alert("Bonjour " + nom + " " + prenom + "\n Bienvenue sur notre site web");

// /* Ci-dessus, l'exercice demandé dans la séquence 5 du module "Développer avec JavaScript" */
// /*Ci-dessous, l'exercice demandé dans la séquence 6*/

// var a = "100";
// var b = 100;
// var c = 1.0;
// var d = true;

// document.write("Ceci est une chaîne de caractères : " + a + "<br>");
// document.write("L'incrémentation de b nous donne : " + (b = --b) + "<br>");
// document.write(
//   "Ceci est le résultat de c+a : " + (Number(c) + Number(a)) + "<br>"
// );
// document.write("Ceci est l'inverse de d : " + (d == false) + "<br>");

// /* Ci-dessous, vous trouverez les exercices 1, 2 et 3 de la séquence 7 */
// /* Exercice 1 */   

// var z = window.prompt("Saisissez le nombre de votre choix");
// document.write("Le nombre que vous avez choisi est : " + z + "<br>");
// if (z%2 == 0) {
//     document.write("Votre nombre est pair" + "<br>");
// } else {
//   document.write("Votre nombre est impair" +"<br>");
// }

// /* Exercice 2 */
// var date = window.prompt("Saisissez votre année de naissance");
// document.write("Votre année de naissance est : " + date + "<br>");
// var age = (2021 - date)
// document.write("Vous avez : " + age + " ans" + "<br>");
// if (age <18) {
// document.write("Vous êtes mineur" +  "<br>");
// } else {
//   document.write("Vous êtes majeur" + "<br>");
// }

// /* Exercice 3 */ 
// var p = window.prompt("Saisissez un nombre");
// var o = window.prompt("Saisissez un opérateur");
// var m = window.prompt("Saisissez un nombre"); 
// if (p == NaN || m == NaN){
//   window.alert("La commande que vous avez rentrée n'est pas un chiffre, ni un nombre, recommencez");
// }
// if (o != "+" && o != "-" && o != "/" && o != "*")
// {
//   window.alert("L'opérateur que vous avez entré est erroné");
// }


// if (o == "+"){
//   r = p + m;
//   document.write("Le résultat est : " + r);
// }
// if (o == "/") {
//   if (m == 0) {
//   window.alert("Div par 0 impossible");
//   } else {
//   r = p / m;
//   }
// }
// if (o == "*"){
//   r = p * m;
//   document.write("Le résultat est : " + r);
// }
// if (o == "-"){
//   r = p - m;
//   document.write("Le résultat est : " + r);
// } 

/*Exercice 1 séquence 10*/

var tableau = [];
tableau [0] = ["Fifa"];
tableau [1] = ["Nba 2K"];
tableau [2] = ["GTA"];
tableau [3] = ["Watch Dogs"];
tableau [4] = ["Warzone"];
 document.write(tableau);
