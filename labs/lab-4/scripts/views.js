const printAttemptsRemaining = (tries) => {
  const attempsText = document.getElementById('attempts');
  attempsText.innerHTML = `<h2>Time left: ${timeLeft} seconds</h2>`;
}

const printClue = (status, guess) => {
  const [digit100, digit10, digit1] = status ? ["H", "I", "-"] : ["L", "O", "-"];
  document.getElementById('digit-100').src = `assets/${digit100}.png`;
  document.getElementById('digit-10').src = `assets/${digit10}.png`;
  document.getElementById('digit-1').src = `assets/${digit1}.png`;
  then = Date.now();
}

const printGameOver = (status) => {
  document.body.innerHTML = (status ? 
    `<h1>You Win!</h1><p> Got it in ${30 - timeLeft} seconds</p>` :
    `<h1>You Lose!</h1> <p>The passcode was: ${passcode}.</p>`
  )
}

const printDigits = () => {
  document.getElementById("digit-100").src = `assets/${guess.hundreds}.png`;
  document.getElementById("digit-10").src = `assets/${guess.tens}.png`;
  document.getElementById("digit-1").src = `assets/${guess.ones}.png`;
}