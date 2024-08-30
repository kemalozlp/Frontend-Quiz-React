import QuestionReact from "./components/QuestionReact"
import QuizAppReact from "./components/QuizAppReact"
import ScoreLightReact from "./components/ScoreLightReact"
import './App.css'
import { useState } from "react"
import data from "./data.json"

function App() {
  console.log(data);
  const [Quests, setQuests] = useState([]);
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(0);
  function handleShow() {
    for (let i = 0; i < data.quizzes.length; i++) {
      if (data.quizzes[i].title === event.target.innerText) {
        setQuests(Quests.push(data.quizzes[i]));
        console.log(setQuests([data.quizzes[i]]));
      }
    }
    setShow(1);
    console.log(Quests)

  }
  return (
    <div className="Quiz">
      <QuizAppReact handleShow={handleShow} show={show} setShow={setShow} />
      <QuestionReact show={show} setShow={setShow} setCount={setCount} Quests={Quests} count={count} />
      <ScoreLightReact show={show} setShow={setShow} />

    </div>
  )
}

export default App
