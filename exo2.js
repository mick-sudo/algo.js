let read = require("readline-sync");

// let vente = read.questionInt("prix de vente ")
// let fab = read.questionInt("prix de fabrication ")

// let profit = vente - fab;

// if(profit > 0){
//     console.log("profit de " + profit);
// } else if(profit < 0){
//     console.log("perte de " + -profit);
// } else {
//     console.log("ni perte ni gain");
// }

///////////////////////////////////////////////////////////////////////
// let nombre = read.questionInt("saisir un chiffre ");
// let nombre1 = read.questionInt("saisir un chiffre ");
// let nombre2 = read.questionInt("saisir un chiffre ");

// let nombres = [nombre, nombre1, nombre2];
// let nombreMax = nombre;

// for(let i = 0; i < nombres.length; i++){
//     if(nombreMax < nombres[i]){
//         nombreMax = nombres[i];
//     }
// }

// console.log("Le plus grand nombre est " + nombreMax);

////////////////////////////////////////////////////////////////////////////

// let note = read.questionInt("ajouter une note ");

// if(note > 0 && note <= 4){
//     console.log("Catastrophique, il faut tout revoir")
// }else if(note <= 10){
//     console.log("Insuffisant");
// }else if(note <= 14){
//     console.log("Peut mieux faire");
// }else if(note <= 17){
//     console.log("bien");
// }else if(note <=20){
//     console.log("Exellent, bon travail");
// }else{
//     console.log("Entrez une note valide");
// }


let nombre = read.questionInt("saisir un chiffre ");
let operateur = read.question("saisir un operateur");
let nombre1 = read.questionInt("saisir un chiffre ");
let result = "";
switch (operateur){
    case "+":
        result = nombre + nombre1;
        break;
        case "*":
            result = nombre * nombre1;
            break;
            case "/":
                result = nombre / nombre1;
                break;
                case "-":
                    result = nombre - nombre1;
                    break;
}

//console.log(result);
console.log(nombre + " " + operateur +" "+ nombre1 + " " + "=" + " " + result);