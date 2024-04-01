/*
LOGICAL OPERATORS:

1 - Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, 
has less than 50 million people and is not an island.

2 - Write an if statement to help Sarah figure out if your country is right for her. 
You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.

3 - If yours is the right country, log a strings like this 'You should live in Portugal :)'. 
If not, log 'Portugal does not meet your criteria :('.

4 - Probably your country does not meet all the criteria. 
So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D).
*/
const prompt = require("prompt-sync")();
let population = (Number(prompt("Quantidade da população do país em que quer viver? ")));
let language = prompt("Qual é a lingua falada lá? ");
let islandStr = prompt("É uma ilha? ");
let country = "Portugal";
let countryAlternative = "Canadá";
let isSland = false;

language = language.toLowerCase().trim().split(" ").join("");
islandStr = islandStr.toLowerCase();

if (islandStr === 'sim' || islandStr === 'yes' || islandStr === 's' || islandStr === 'y') {
    isSland = true;
} else {
    isSland = false;
} if (population && (language === 'portuguese' || language === 'portugues') && isSland == false) {
    console.log(`Deveria morar em ${country}`);
} else if (population && (language === 'english' || language === 'ingles') && isSland == false) {
    console.log(`Você deveria morar no ${countryAlternative}`);
} else {
    console.log(`${country} não cumpre os seus critérios. :(`);
}

