let read = require("readline-sync");


let nombre = read.questionInt("saisir un chiffre ");
let operateur = read.question("saisir un operateur");

while(operateur !== "+" && operateur !== "-" && operateur !== "/" && operateur !== "*"){
    operateur = read.question("saisir un operateur valide ");
}

let nombre1 = read.questionInt("saisir un chiffre ");

let resultat;
resultat = (operateur === "+") ? (nombre + nombre1) : (operateur === "-") ? (nombre - nombre1) :
(operateur === "*") ? (nombre * nombre1) : (operateur === "/") ? (nombre / nombre1) : "calcul impossible";

console.log(resultat);