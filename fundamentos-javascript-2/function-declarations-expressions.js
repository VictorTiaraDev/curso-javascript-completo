/*https://www.hashtagtreinamentos.com/arrow-function-em-javascript?gad_source=1&gclid=CjwKCAjwt-OwBhBnEiwAgwzrUj1t6BpwgGbVG9VXvSpGiQE-P8LvXAaB2bi7efFXd8EnZexGAmyEWRoCgEwQAvD_BwE */
/*Function Declarations vs. Expressions

1- The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives 
a population value, and returns the percentage of the world population that the given population represents. 
For example, China has 1441 million people, so it's about 18.2% of the world population.

2- To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

3- Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, 
and log them to the console.
*/
let worldPopulation = 7900
let percentageOfWorld1 = population => (population / worldPopulation) * 100;
let percPort = percentageOfWorld1(10);
let percGer = percentageOfWorld1(83);
let percFin = percentageOfWorld1(6);

let worldPopulation = 7900
let percentageOfWorld1 = population => (population / worldPopulation) * 100;
let percPort = percentageOfWorld1(10);
let percGer = percentageOfWorld1(83);
let percFin = percentageOfWorld1(6);

console.log(`População total do Mundo é: ${worldPopulation} milhões de habitantes.

 Porcentagem da população de Portugal é: ${percPort.toFixed(2)}% comparada ao resto do Mundo.

 Porcentaem da população da Alemnha é: ${percGer.toFixed(2)}% comparada ao resto do Mundo.

 Pocentagem da população da Finlandia é: ${percFin.toFixed(2)}% comparada ao resto do Mundo.`);

//4- Create a function expression which does the exact same thing, called percentageOfWolrd2, 
//and also call it with 3 country populations (can be the same populations).

let percentageOfWorld2 = population => (population / worldPopulation) * 100;
let percBra = percentageOfWorld2(210)
let percIng = percentageOfWorld2(78)
let percArg = percentageOfWorld2(15)

console.log(`População total do Mundo é: ${worldPopulation} milhões de habitantes.

 Porcentagem da população de Brasil é: ${percBra.toFixed(2)}% comparada ao resto do Mundo.

 Porcentaem da população da Englaterra é: ${percIng.toFixed(2)}% comparada ao resto do Mundo.

 Pocentagem da população da Argentina é: ${percArg.toFixed(2)}% comparada ao resto do Mundo.`);