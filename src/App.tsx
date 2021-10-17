import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Difficulty, fetchData, QuestionState } from './Components/Api/Api';
import QuestionCard from './Components/QuestionCard'
import { GlobalStyle } from './App.styles'

const App = () => {
  const [Loading, setLoading] = useState(false);
  const [Questions, setQuestions] = useState<QuestionState[]>([]);
  const [UserAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [GameOver, setGameOver] = useState(true)
  const TotalQs = 10;
  const [number, setNumber] = useState(0);

  type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;

  }
  const [score, setScore] = useState(0);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuest = await fetchData(
      TotalQs, Difficulty.EASY
    )
    setQuestions(newQuest);
    setScore(0);
    setUserAnswers([])
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // console.log("target Answer: ",);
    const answer = e.currentTarget.value;
    const correct = Questions[number].correct_answer === answer;
    if (correct) setScore(prev => prev + 1);
    const answerObj = {
      question: Questions[number].question,
      answer,
      correct,
      correctAnswer: Questions[number].correct_answer
    }
    setUserAnswers(prev => [...prev, answerObj]);

  }

  const nextQuestion = () => {
    const nextqs = number + 1;
    if (nextqs === TotalQs) {
      setGameOver(true);
    } else {
      setNumber(nextqs)
    }
  }

  console.log("my data is : ", Questions);

  return (
    <>
      <GlobalStyle />
      <Main className="App">
        <h1>React TS</h1>
        {GameOver || UserAnswers.length === TotalQs ?
          <Button className="start" onClick={startTrivia}>Start Quiz</Button>
          : null}
        {!GameOver ? <p>Score: {score} </p> : null}
        {Loading ? <p>Loading Question ...</p> : null}
        {!Loading && !GameOver &&
          (
            <QuestionCard
              questionNr={number + 1}
              totalQs={TotalQs}
              question={Questions[number].question}
              answers={Questions[number].answers}
              userAnswer={UserAnswers ? UserAnswers[number] : undefined}
              callback={checkAnswer}
            />
          )
        }
        {!GameOver && !Loading && UserAnswers.length === number + 1 && number !== TotalQs - 1 ?
          <button className="next" onClick={nextQuestion}>Next Question</button>
          : null}
      </Main>
    </>
  );
}

export default App;


const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 600px;
  min-width: 900px;
  h1{
    color: white;
    font-size: 2rem;
    background-image: linear-gradient(45deg, red, transparent,blue);
    text-align: center;
  }
  >p{
    color: white
  }
  & .next{
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
`
const Button = styled.button`
  background-image: linear-gradient(180deg, #4156fb 0%, #a119f9 100%);
  color: white;
  padding: 6px;
`