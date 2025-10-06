import * as http from './http.js';
import * as view from './view.js'

const GET_TRIVIA = 'https://opentdb.com/api.php?amount=1&difficulty=easy';
const state = {
  score: 0,
  timer: 20,
  invervalId: null,
  trivia: null
};

const countdown = () => {
  if (state.timer) {
    state.timer--;
    view.PlayScene(state);
  }
}

const createGame = () => {
  state.timer = 20;
  state.invervalId = setInterval(countdown, 1000);
  playGame();
}

const playGame = async () => {
  const json = await http.sendGetRequest(GET_TRIVIA);
  [ state.trivia ] = json.results;
  view.PlayScene(state)
}

window.start = async () => {
  createGame();
}

window.addEventListener('load', start);