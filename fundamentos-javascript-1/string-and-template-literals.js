//1- If your country split in half, and each half would contain half the population, 
//then how many people would live in each half?

const country = "Portugal";
const continent = "Europe";
let population = 11;

halfPopulation = population / 2;

console.log("A metade da população é: ", halfPopulation);

//2- Increase the population of your country by 1 and log the result to the console.

population = population + 1;

console.log("Acrescentando + 1 na população o resultado é: ", population);

//3- Finland has a population of 6 million. Does your country have more people than Finland?

let populationFiland = 6;
result1 = population > populationFiland;

console.log("A população de Portugal é maior que a população da Finlandia? ", result1);

//4- The average population of a country is 33 million people. Does you country have less people than the average country?

let populationCountry = 33;
result2 = population > populationCountry;

console.log("A população de Portugal é maior que a populção de outro País? ", result2);

//5- Based on the variables you created, create a new variable description which contains a string with this format: 
//'Portugal is in Europe, and its 11 million people speak portuguese'.

population = population - 1;
let sintese = country + ' is in ' + continent + ', and its ' + population + ' million people speak portuguese.';

console.log(sintese);

//6- Recreate the description variable from the last assignment, this time using the template literal syntax.

population = population - 1;
let sintese = `${country} is in ${continent}, and its ${population} million people speak portuguese.`;

console.log(sintese);