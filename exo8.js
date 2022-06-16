let read = require("readline-sync");

let nombre = read.questionInt("saisir un chiffre ");

let somme = 0;         

// for(let i = 1; i <= nombre; i++){
//     somme += i
//     console.log( (somme - i) + "+" +  i + "=" + somme)
// }

// console.log(somme);
let operateur = ""

for(let index = 0; index <= nombre; index++){
    somme = somme + index;
    if(index !== nombre){
        operateur = operateur + index + " + "
    }else{
        operateur += index + " = "
    }
}

console.log(operateur + somme);