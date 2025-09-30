const incrementEvent = (key) => {
  guess.increment(key);
  printDigits();
}

const decrementEvent = (key) => {
  guess.decrement(key);
  printDigits()
}

const initControls = () => {
  const button = document.getElementById('guess-button');
  button.addEventListener("click", buttonEvent);
  document.getElementById('up-100').addEventListener("click", () => incrementEvent('hundreds'));
  document.getElementById('up-10').addEventListener("click", () => incrementEvent('tens'));
  document.getElementById('up-1').addEventListener("click", () => incrementEvent('ones'));
  
  document.getElementById('down-100').addEventListener("click", () => decrementEvent('hundreds'));
  document.getElementById('down-10').addEventListener("click", () => decrementEvent('tens'));
  document.getElementById('down-1').addEventListener("click", () => decrementEvent('ones'));
}

const buttonEvent = () => {
  const number = guess.toString();
  guessNumber(number);
}


initControls();