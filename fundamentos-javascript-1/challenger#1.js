
//CHALLENGER #1

const massMark = 78;
const heightMark = 1.69;
const massjohn = 92;
const heightjohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJhon = massjohn / (heightjohn * heightjohn);
let markHigherBMI = BMIMark > BMIJhon;

console.log('BMI of Mark: ' + BMIMark + ' BMI of John: ' + BMIJhon, markHigherBMI + ', Marks BMI is higher.');