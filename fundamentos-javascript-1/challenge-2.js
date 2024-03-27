//CHALLENGE #2
//1- Test

const massMark = 78;
const heightMark = 1.69;
const massjohn = 92;
const heightjohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJhon = massjohn / (heightjohn * heightjohn);
let markHigherBMI = BMIMark > BMIJhon;

if (markHigherBMI) {
    console.log(`Mark's BMI is higher than John's!`);
} else {
    console.log(`John's BMI is higher than Mark's!`);
}

//2- Test

const massMark = 81;
const heightMark = 1.69;
const massjohn = 91;
const heightjohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJhon = massjohn / (heightjohn * heightjohn);
let markHigherBMI = BMIMark > BMIJhon;


if (markHigherBMI) {
    console.log(`Mark's BMI ${BMIMark.toFixed(1)} is higher than John's ${BMIJhon.toFixed(1)}!`);
} else {
    console.log(`John's BMI ${BMIJhon.toFixed(1)} is higher than Mark's ${BMIMark.toFixed(1)}!`);
}