/**
 * Si le nombre est divisible par 3, écrivez "fizz". Si le nombre est divisible par 5, écrivez "buzz".
 * Si le nombre est divisible à la fois par 3 et 5, écrivez "fizzbuzz". Sinon, imprimez simplement le
 * numéro.
 * @param nombre - le nombre à compter jusqu'à
 */
let read = require("readline-sync");

let nombre = read.questionInt("saisir un nombre ");

function fizzBuzz(nombre) {
  for (let i = 1; i <= nombre; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("fizzbuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else {
        console.log(i);
    }
  }
};

fizzBuzz(nombre)