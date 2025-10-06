const BooleanOptions = () => (
  `
  <div>
    <button onclick='checkAnswer("${a}")>${a}</button>
    <button onclick='checkAnswer("${b}")>${b}</button>
    <button onclick='checkAnswer("${c}")>${c}</button>
    <button onclick='checkAnswer("${d}")>${d}</button>
  </div>
  `
)

const MultiOptions = (trivia) => {
  const options = [trivia.correct_answer, ... trivia.incorrect_answers];
  const [a, b, c, d] = options.sort();
  return (`
  <div>
    <button onclick='checkAnswer("${a}")>${a}</button>
    <button onclick='checkAnswer("${b}")>${b}</button>
    <button onclick='checkAnswer("${c}")>${c}</button>
    <button onclick='checkAnswer("${d}")>${d}</button>
  </div>
  `)
}

const Options = (trivia) => {
  switch(trivia.type){
    case "boolean": return BooleanOptions(trvia);
    case "multiple": return MultiOptions(trivia);
  }
}

export default Options;