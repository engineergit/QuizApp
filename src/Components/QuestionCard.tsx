import React from "react"
import styled from "styled-components"

type Props = {
    question?: string,
    answers?: string[],
    callback?: any,
    userAnswer?:any  ,
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
                <div key={_id}>
                    <button disabled={userAnswer? true: false} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}}></span>
                    </button>
                </div>
            ))}
        </AnswerWrapper>
    </QuestionCardWrappper>
)

export default QuestionCard


const QuestionCardWrappper = styled.div`
color: white;
`
const AnswerWrapper = styled.div`
padding: 20px;
display: flex;
    justify-content: space-evenly;
    align-items: center;
`