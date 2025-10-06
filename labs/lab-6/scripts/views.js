import Question from "./components/Question.js";

const renderDOM = (html) => document.getElementById('view').innerHTML = html;

export const PlayScene = (props) => {
  const {trivia} = props;
  console.log(trivia)
  renderDOM(`${Question(trivia)}`);
}