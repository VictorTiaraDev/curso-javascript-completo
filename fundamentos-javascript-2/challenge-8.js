/*
CHALLENGE #8

Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

1- Create an array called bills containing all 10 test bill values.
Create empty arrays for the tips and the totals (tips and totals)

2- Use the calcTip function we wrote before (included in the starter code) 
to calculate tips and total values (bill + tip) for every bill value in the bills array. 
Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

BONUS:
Write a function calcAverage which takes an array called arr as an argument. 
This function calculates the average of all numbers in the given array. 
This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

1- First, you will need to add up all values in the array. To do the addition, 
start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, 
add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

2- To calculate the average, divide the sum you calculated before by the length of the array 
(because that's the number of elements).

3- Call the function with the totals array.
*/

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

let i = 0;

while (i < bills.length) {

    let tip = calcTip(bills[i])
    tips.push(tip)
    totals.push(bills[i] + tip);
    i += 1;
}

const calcAverage = function (arr) {

    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i]
    }

    return sum / arr.length

}

let average = calcAverage(totals);
console.log(`The average is ${average}`);


