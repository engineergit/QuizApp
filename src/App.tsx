import React from 'react';
import { useState } from 'react';
import QuestionCard from './Components/QuestionCard'
const App=()=> {
  const [Loading, setLoading] = useState(false);
  const [Questions, setQuestions] = useState([]);
  const [Number, setNumber] = useState(0)
  const [UserAnswers, setUserAnswers] = useState([])
  const [GameOver, setGameOver] = useState(true)
  
  const startTrivia= async () =>{

  }

  const checkAnswer= async (e: React.MouseEvent<HTMLButtonElement>) =>{
    
  }

  const nextQuestion = () => {

  }
  return (
    <div className="App">
      <h1>React TS</h1>
      <button className="start" onClick={startTrivia}>Start</button>
      <p>Score:</p>
      <p>Loading Question ...</p>
      <QuestionCard questionNr={9} />
    </div>
  );
}

export default App;