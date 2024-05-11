//JavaScript - Project - 01

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
  //document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When is no input (Quando não digitou número para entrada)
  if (!guess) {
    //document.querySelector('.message').textContent = '❌ No number!';
    document.querySelector('body').style.backgroundColor = '#fc0303';
    document.querySelector('.number').style.width = '30rem';
    displayMessage('❌ No number!');

    // When player wins (Quando o jogador ganha)
  } else if (guess === secretNumber) {
    displayMessage('✅ Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.highscore').textContent = score;
    displayMessage('✅ Correct Number!');

    // When guess is too high (Quando a estimativa do número é alta)
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      //document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😔 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

/*
// Coding Challenge #1

Implement a game rest functionality, so that the player can make 
a new guess! Here is how:

1- Select the element with the 'again' class and attach 
a click event handler.

2- In the handler function, restore initial 
values of the score and secretNumber variables.

3- Restore the initial conditions of the massege, number, score and
guess input field.

4- Also restore the original background color (#222) 
and number width (15rem)
*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  guess = Number((document.querySelector('.guess').value = ''));
});
