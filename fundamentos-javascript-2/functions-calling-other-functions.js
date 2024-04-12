/*

https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function

Functions Calling Other Functions:

1- Create a function called describePopulation. Use the function type you like the most. 
This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

2- To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

3- Call describePopulation with data for 3 countries of your choice.
*/
let worldPopulation = 7900


let describePopulation = function (country, population) {
    percentage = percentageOfWorld1(worldPopulation, population)
    return `${country} has ${population} million people, which is about ${percentage.toFixed(2)}% of the world.`;
}



let percentageOfWorld1 = function (worldPopulation, population) {
    percentage = (population / worldPopulation) * 100
    return percentage
}

let prompt = require("prompt-sync")();
let country = prompt('Qual é seu país? ');
let population = (Number(prompt('Qual é a população total? ')));
let descpopulation = describePopulation (country, population);
console.log(descpopulation);