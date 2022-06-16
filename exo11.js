let read = require("readline-sync");

let somme = read.questionFloat("saisir une somme ");

/**
 * Il prend un nombre, le divise par le premier élément du tableau monaies, puis prend le plancher de
 * ce nombre, puis prend le reste du nombre divisé par le premier élément du tableau monaies, puis
 * définit ce reste comme nouveau nombre, puis répète le processus avec l'élément suivant du tableau
 * monaies, et ainsi de suite, jusqu'à ce qu'il ait parcouru tous les éléments du tableau monaies.
 * @param somme - le montant d'argent que vous souhaitez convertir
 */
let monaies = [500,200,100,50,20,10,5,2,0.50,0.20,0.10,0.05,0.01];
let result = [];
let billet = ["500","200","100","50","20","10","5","2","0.50","0.20","0.10","0.05","0.01"];

function calcule(somme){
    for(let i = 0; i < monaies.length; i++){
       let division = somme/monaies[i];
       let moneytime = Math.floor(division);
       let rest = somme % monaies[i]
        somme = rest
        result.push(moneytime)
        //console.log(result[i])
        if(result[i] <1 && billet[i] >= 5){
            console.log(result[i] + " billet de " +billet[i])
        }else{
            console.log(result[i] + " piece de " +billet[i])
        }
    }
}

calcule(somme);
