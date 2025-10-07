import * as http from './http.js';
import * as view from './view.js'

const GET_TRIVIA = 'https://opentdb.com/api.php?amount=1&difficulty=easy';
const BIN_ID = '68e543bfae596e708f098474';
const GET_LEADERBOARD = `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`;
const PUT_LEADERBOARD = `https://api.jsonbin.io/v3/b/68e543bfae596e708f098474`

const state = {
  score: 0,
  timer: 20,
  invervalId: null,
  trivia: null,
  topScores: [],
};

const countdown = () => {
  if (state.timer) {
    state.timer--;
    view.PlayScene(state);
  }
}

window.createGame = () => {
  state.timer = 20;
  state.invervalId = setInterval(countdown, 1000);
  playGame();
}

window.playGame = async () => {
  const json = await http.sendGetRequest(GET_TRIVIA);
  [ state.trivia ] = json.results;
  view.PlayScene(state)
}

window.start = async () => {
  const leaderboardJSON = await http.sendGetRequest(GET_LEADERBOARD);
  state.topScores = leaderboardJSON.record;
  state.score = 0;
  state.timer = 20;
  view.StartMenu(state);
}

window.checkAnswer = (attempt) => {
  const answer = state.trivia.correct_answer;
  if (attempt == answer) {
    state.score += state.timer;
    state.timer += 10;
    playGame();
  }
  else{
    clearInterval(state.invervalId);
    view.GameoverScene(state);
  }
}

window.addEventListener('load', start);

window.updateLeaderboard = async () => {
  const name = document.getElementById('name').value;
  const currentScore = {name: name, score: state.score};
  console.log(currentScore)
  const top5 = await getTop5(currentScore);
  await http.sendPutRequest(PUT_LEADERBOARD, top5);
  start();
}

const getTop5 = async (newScore) => {
  const leaderboardJSON = await http.sendGetRequest(GET_LEADERBOARD);
  const top5 = leaderboardJSON.record;
  top5.push(newScore);
  top5.sort((a, b) => b.score - a.score);
  top5.pop();
  return top5;
}