/*
Dot vs. Bracket Notation
*/

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Michael', ' Peter', ' Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const prompt = require("prompt-sync")();
const interessedIn = prompt('Waht do you want to know about Jonas? Choose beteween firstName, lastName, age, job, and friends. ');

if (jonas[interessedIn]) {
    console.log(jonas[interessedIn]);
} else {
    console.log('Wrong request! Choose beteween firstName, lastName, age, job, and friends.');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

//Challenge
//"Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);
