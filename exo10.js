let read = require("readline-sync");

let nombre = read.questionInt("saisir un chiffre ");

// let star = "*"
// let escalierD = ""

// for(let index = 1; index < nombre; index++){
//     for( let j = 1; j <= nombre - index;j++){
//         escalierD+= " "
//     }
//     for(let k = 0; k < 2 * index - 1 ; k++){
//         star+= "*"
//     }
//     console.log(escalierD + star)
//     }

/* Création d'un triangle dont le nombre d'étoiles est égal au nombre de rangées. */
for(let i = 1; i <= nombre; i++){
    let espaces = "";
    let etoiles = "";
    let etoiles2 = "";
    for(let j = 0; j < nombre - i; j++){
        espaces += " ";
    }
    for(let k = 0; k < i;k++){
        etoiles+="*"
        if(k != 0){
            etoiles2+= "*"
        }
    }
    console.log(espaces + etoiles + etoiles2);
}