import Question from "./components/Question.js";
import HUD from './components/HUD.js';
import Skip from "./components/Skip.js";

const renderDOM = (html) => document.getElementById('view').innerHTML = html;

export const PlayScene = (props) => {
  const {timer, score, trivia} = props;
  renderDOM(`
    ${HUD(timer, score)}
    ${Question(trivia)}
    ${Skip()}
    `);
}