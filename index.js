// let couleur = "orange";

// if(couleur === "rouge"){
//     console.log("Arretez vous!");
// }else if(couleur === "vert"){
//     console.log("Avancez");
// }else if(couleur === "orange"){
//     console.log("Préparez-vous a vous arreter");
// }else{
//     console.log("La couleur est mauvaise !");
// }

let read = require("readline-sync");

// let nom = read.question("what your name ?")
// console.log("Fuck you " + nom);

// let nom2 = read.question("what your name ?")
// console.log("Fuck you tooo " + nom2);

let un = read.question("saisir un nombre!")
let deux = read.question("saisir un deuxiem nombre!")

let resultat = Number(un) + Number(deux);

console.log( un + " + " + deux + " = " + resultat);