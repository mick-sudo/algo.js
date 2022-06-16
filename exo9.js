let read = require("readline-sync");

let nombre = read.questionInt("saisir un chiffre ");

let star = "*"
let escalierD = ""


for(let index = 0; index < nombre; index++){
escalierD += star  
console.log(escalierD)
}

for(let index = 1; index < nombre; index++){
escalierD = escalierD.slice(0, nombre - index)
//escalierD = escalierD.slice(0, escalierD.length-1)
console.log(escalierD)
}
