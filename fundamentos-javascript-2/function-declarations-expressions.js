/*
//Function's

//Function Declaration

function calcAge1(birthYeah) {
    return 2037 - birthYeah;

}
const age1 = calcAge1(1991);

//Function Expression
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;

}
const age2 = calcAge2(1991);
console.log(calcAge1, calcAge2);

//Arrow Expression
const calAge3 = birthYeah => 2037 - birthYeah;
const age3 = calAge3(1991);
console.log(age3);
*/

/*Function Declarations vs. Expressions

1- The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives 
a population value, and returns the percentage of the world population that the given population represents. 
For example, China has 1441 million people, so it's about 18.2% of the world population.

2- To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

3- Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, 
and log them to the console.
*/

let percentageOfWorld1 = percentWolrd => 7900;
let percent1 = percentageOfWorld1(7900 / 1);
let percPort = (10 / 7900) * 100;
let percGer = (83 / 7900) * 100;
let percFin = (6 / 7900) * 100;

console.log(`População total do Mundo é: ${percent1} milhões de habitantes.

 Porcentagem da população de Portugal é: ${percPort.toFixed(2)}% comparada ao resto do Mundo.

 Porcentaem da população da Alemnha é: ${percGer.toFixed(2)}% comparada ao resto do Mundo.

 Pocentagem da população da Finlandia é: ${percFin.toFixed(2)}% comparada ao resto do Mundo.`);

//4- Create a function expression which does the exact same thing, called percentageOfWolrd2, 
//and also call it with 3 country populations (can be the same populations).

let percentageOfWorld2 = percentWolrd => 7900;
let percent2 = percentageOfWorld2(7900 / 1);
let percBra = (210 / 7900) * 100;
let percIng = (78 / 7900) * 100;
let percArg = (15 / 7900) * 100;

console.log(`População total do Mundo é: ${percent2} milhões de habitantes.

 Porcentagem da população de Brasil é: ${percBra.toFixed(2)}% comparada ao resto do Mundo.

 Porcentaem da população da Englaterra é: ${percIng.toFixed(2)}% comparada ao resto do Mundo.

 Pocentagem da população da Argentina é: ${percArg.toFixed(2)}% comparada ao resto do Mundo.`);