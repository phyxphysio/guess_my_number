"use strict";

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
document.querySelector('.number').textContent = number;

// Play again
document.querySelector(".again").addEventListener("click", function () {
  // Reset number
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";

  // Reset score
  score = 20;
  document.querySelector(".score").textContent = score;

  // Reset message
  let message = "Start guessing.";
  document.querySelector(".message").textContent = message;

  // Reset Style
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number").style.width = "10rem";

  //   Reset guess
  document.querySelector(".guess").value = '';
});

// Chekc guess
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  let message = "Guess now bithc ";

  //   Player loses
  if (score == 1) {
    message = "You lose";
    document.querySelector("body").style.backgroundColor = "red";

  } else {
    // no guess
    if (!guess) {
      message = "Guess something mole";

      //   Guess too high
    } else if (guess > number) {
      message = "Too high, shitbird!";
      score--;

      //   Gues too low
    } else if (number > guess) {
      message = "Too low, shitheel";
      score--;

      //   Guess correct
    } else {
      message = "Nailed it!";
      document.querySelector(".number").textContent = number;

      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector(".number").style.width = "30rem";

      //   Update high score
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    }
  }
  document.querySelector(".message").textContent = message;
  document.querySelector(".score").textContent = score;

});
