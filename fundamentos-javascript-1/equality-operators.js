/*

Declare a variable numNeighbours based on a prompt input like this:

prompt('How many neighbour countries does your contry have?');
If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).

Use an else-if block to log 'More than 1 border' in case numNeighbours is greater than 1.

Use an else block to log 'No borders' (this block will be executed when numNeighbours is 0 or any other value).

Test the code with different values of numNeighbours, including 1 and 0.

Change == to ===, and test the code again, with the same values of numNeighbours. Notice what happens when there is exactly 1 border! Why is this happening?

Finally, convert numNeighbours to a number, and watch what happens now when you input 1.

Reflect on why we should use the === operator and type conversion in this situation.
*/

const prompt = require("prompt-sync")();
let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}