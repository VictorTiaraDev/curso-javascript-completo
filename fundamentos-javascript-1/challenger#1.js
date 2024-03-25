
//CHALLENGER #1

let massMark = 78;
let heightMark = 1.69;
let massjohn = 92;
let heightjohn = 1.95;

BMIMark = massMark / (heightMark * heightMark);
BMIJhon = massjohn / (heightjohn * heightjohn);
markHigherBMI = BMIMark > BMIJhon;

console.log('BMI of Mark: ' + BMIMark + ' BMI of John: ' + BMIJhon, markHigherBMI + ', Marks BMI is higher.');