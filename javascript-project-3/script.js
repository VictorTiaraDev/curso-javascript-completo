'use strict';

// Selecting elements (Seleção elementos)

let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');
let diceEl = document.querySelector('.dice');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');

let playing = false;
let currentScore;
let activePlayer;
let scores;

let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');

// Starting conditions (Iniciando condições)

const init = function () {
  playing = true;
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  diceEl.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player0El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing === true) {
    // 1. Generating a random dice roll(Gerando os números quando rolam);
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    // 2. Display dice(Mostrar valores do dado)
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check rolled 1 (checar primeira rodada)
    if (dice !== 1) {
      // Add dice to current score (adicionar valor de pontuação)
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player (Mudar para o proximo jogador)
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  // 1. Add current score to active player's score.
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  currentScore = 0;
  // 2. Check if player's score is >= 100 Finish game.
  if (scores[activePlayer] >= 100) {
    //Finish the game
    playing = false;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    //Switch to the next player
    switchPlayer();
  }
});

btnNew.addEventListener('click', function () {
  playing = true;
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
});
