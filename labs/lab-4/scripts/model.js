const passcode = Math.floor(Math.random() * 1000);
const guess = new Guess();
let then = Date.now();
let timeLeft = 30;
let gameover = false;

const guessNumber = (guess) => {
  if (guess == passcode) {
    gameover = true;
    printGameOver(true);
  }
  else{
    giveClue(guess);
  }
}

const giveClue = (guess) => {
  printClue(guess > passcode, guess);
}

const main = () => {
  const now = Date.now();
  if (gameover) {
    return
  }
  else if (timeLeft <= 0){
    printGameOver(false);
  }
  else if (now - then > 1000){
    timeLeft --
    printDigits();
    printAttemptsRemaining()
    then = Date.now()
  }
  requestAnimationFrame(main);
}

main();