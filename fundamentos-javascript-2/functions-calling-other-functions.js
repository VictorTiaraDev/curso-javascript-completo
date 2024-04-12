/*
Functions Calling Other Functions:

1- Create a function called describePopulation. Use the function type you like the most. 
This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

2- To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

3- Call describePopulation with data for 3 countries of your choice.
*/

let populattionOfWorld = function (totalOfWorld) {
    return totalOfWorld = 7900;
}

let describleCountrys = function (country, population, capitalCity, language) {
    const totalOfWorld = populattionOfWorld(7900 / 1);
    let population1 = (population / 7900) * 100;
    const description =
        `Seu país é: ${country} 
    sua capital é: ${capitalCity} 
    idioma falado é: ${language} 
    Tem a porcentagem de ${population1.toFixed(2)}% comparado com a população mundial que é de ${totalOfWorld} bilhões de habitantes.`;
    return description;
}

const prompt = require("prompt-sync")();
const country = prompt('Qual é seu país? ');
const population = (Number(prompt('Qual é a população total? ')));
const capitalCity = prompt('Qual é a capital? ');
const language = prompt('Qual é o idioma? ');
const descpopulation = populattionOfWorld((population / 7900) * 100);

const descOfWorld = describleCountrys();
console.log(descOfWorld);