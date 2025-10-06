const Question = (triva) => (
  `
  <h3>
    <div>Category- ${triva.category}</div>
    <div>Difficulty- ${triva.diffculty}</div>
  </h3>
  <h4>Question</h4>
  <p>${triva.question}</p>
  `
);

export default Question;