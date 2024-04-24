/*
CHALLENGE #3

Let's go back to Mark and John comparing their BMIs!
This time, let's use objects to implement the calculations! 
Remember: BMI = mass / (height * height) (mass in kg and height in meters).

1- For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). 
Name these objects as mark and john, and their properties exactly as fullName, mass and height.

2- Create a calcBMI method on each object to calculate the BMI (the same method on both objects). 
Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

3- Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: 
"John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
*/

const mark = {

    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
}

const john = {

    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
}

const calcBMI = function (mass, height) {
    return mass / (height * height);
}

let bmiMark = calcBMI(mark.mass, mark.height).toFixed(1);
let bmiJohn = calcBMI(john.mass, john.height).toFixed(1);

if (bmiJohn > bmiMark) {
    console.log(`${john.fullName}'s BMI (${bmiJohn}) is higher than ${mark.fullName}'s (${bmiMark})!`);
} else if (bmiJohn < bmiMark) {
    console.log(`${mark.fullName}'s BMI (${bmiMark}) is higher than ${john.fullName}'s (${bmiJohn})!`);
} else {
    console.log(`${mark.fullName}'s and ${john.fullName}'s BMI's are the same.`);
}















