import * as http from './http.js';
const GET_TRIVIA = 'https://opentdb.com/api.php?amount=1&difficulty=easy';
const state = {};

const playGame = async () => {
  const json = await http.sendGetRequest(GET_TRIVIA);
  console.log(json);
}

window.start = async () => {
  playGame();
}

window.addEventListener('load', start);