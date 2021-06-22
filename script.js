'use strict';

let randNumber = Math.trunc(Math.random() * 20) + 1;

// getting element of class "number"
let number = document.querySelector('.number');

// getting element of class "message"
let msg = document.querySelector('.message');

// getting element of class "score"
let score = document.querySelector('.score');

//getting element of class "highscore"
let highscore = document.querySelector('.highscore');
let dummyHighScore = 0;

// taking a random number for score
let scoreNumber = 20;

// creating event listener
document.querySelector('.check').addEventListener('click', function () {
  let guessNumber = Number(document.querySelector('.guess').value);

  if (!guessNumber) {
    msg.textContent = '🚫 No Number Selected';
  } else if (guessNumber === randNumber) {
    number.textContent = randNumber;
    msg.textContent = '🎉🎉🎉 You Won!';
    score.textContent = scoreNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    // setting highest score
    if (scoreNumber > dummyHighScore) {
      dummyHighScore = scoreNumber;
      highscore.textContent = dummyHighScore;
    }
  } else if (guessNumber !== randNumber) {
    if (guessNumber > randNumber) {
      if (scoreNumber > 1) {
        scoreNumber--;
        score.textContent = scoreNumber;
        msg.textContent = '⬆ Too High!';
      } else {
        number.textContent = 0;
        scoreNumber = 0;
        score.textContent = scoreNumber;
        msg.textContent = '💥💥💥 You Lose!';
        document.querySelector('body').style.backgroundColor = '#ff4040';
        number.style.width = '30rem';
      }
    } else if (guessNumber < randNumber) {
      if (scoreNumber > 1) {
        scoreNumber--;
        score.textContent = scoreNumber;
        msg.textContent = '⬇ Too Low!';
      } else {
        number.textContent = 0;
        scoreNumber = 0;
        score.textContent = scoreNumber;
        msg.textContent = '💥💥💥 You Lose!';
        document.querySelector('body').style.backgroundColor = '#ff4040';
        number.style.width = '30rem';
      }
    }
  }
});

// Again button
document.querySelector('.again').addEventListener('click', function () {
  scoreNumber = 20;
  randNumber = Math.trunc(Math.random() * 20) + 1;
  score.textContent = scoreNumber;
  number.textContent = '?';
  msg.textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
});
