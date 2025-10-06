import Options from './Options.js';

const Question = (triva) => (
  `
  <h3>
    <div>Category- ${triva.category}</div>
    <div>Difficulty- ${triva.difficulty}</div>
  </h3>
  <h4>Question</h4>
  <p>${triva.question}</p>
  ${Options(triva)}
  `
);

export default Question;