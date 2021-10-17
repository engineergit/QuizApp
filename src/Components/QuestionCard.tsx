import React from "react"
import styled from "styled-components"

type Props = {
    question?: string,
    answers?: string[],
    callback?: any,
    userAnswer?: any,
    questionNr?: number,
    totalQs?: number,
    id?: number,
    key?: any
}


const QuestionCard: React.FC<Props> = ({ questionNr, totalQs, answers, userAnswer, callback, question }) => (

    <QuestionCardWrappper>
        <p className="number">Question: {questionNr} / {totalQs}</p>
        <p dangerouslySetInnerHTML={{ __html: question! }} />
        <AnswerWrapper>
            {answers?.map((answer, _id) => (
                <ButtonWrapper correct={userAnswer?.correctAnswer === answer}
                    userClicked={userAnswer?.answer === answer} key={_id}>
                    <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                    </button>
                </ButtonWrapper>
            ))}
        </AnswerWrapper>
    </QuestionCardWrappper>
)

export default QuestionCard

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
};

const QuestionCardWrappper = styled.div`
max-width: 700px;
min-width: 700px;
background: #ebfeff;
border-radius: 10px;
border: 2px solid #0085a3;
padding: 20px;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
text-align: center;
>p {
  font-size: 1rem;
  font-weight: 600;
}
`;
const AnswerWrapper = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
   
    
`;
const ButtonWrapper = styled.div<ButtonWrapperProps>`
user-select: none;
font-size: 0.8rem;
width: 100%;
height: 40px;
button {
    :hover {
        opacity: 0.8;
        background: #cc2b5e;
    }
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
        correct
            ? 'linear-gradient(90deg, #56FFA4, #59BC86)'
            : !correct && userClicked
                ? 'linear-gradient(90deg, #FF5656, #C16868)'
                : 'linear-gradient(90deg, #56ccff, #6eafb4)'};
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
}
`
