/*

CHALLENGE #3

There are two gymnastics teams: Dolphins and Koalas. 
They compete against each other 3 times. 
The winner with the highest average score wins a trophy!

1- Calculate the average score for each team, using the test data included below. 
The average score for Dolphins should be assigned to the scoreDolphins variable, 
and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.
*/


const teamKoala = "Koalas"
const teamDolphins = "Dolphins"
let scoreKoalas = 88 + 91 + 110;
let scoreDolphins = 96 + 108 + 89;

resultKoalas = scoreKoalas / 3;
resultDolphins = scoreDolphins / 3;

if (scoreKoalas > scoreDolphins) {
    console.log(`${teamKoala} win the trophy, ${resultKoalas.toFixed(1)} points!`);
} else if (scoreDolphins > scoreKoalas) {
    console.log(`${teamDolphins} win the trophy, ${resultDolphins.toFixed(1)} points!`);
} else {
    console.log("there was a draw, both win the trophy.");
}