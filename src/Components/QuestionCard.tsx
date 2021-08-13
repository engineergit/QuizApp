import React from "react"

type Props = {
    question?:string,
    answer?:string[],
    callback?:string,
    userAnswer?:any,
    questionNr?:number,
    totalQs?:number,
    id?:number,
    key?:any
}
 
  
const QuestionCard: React.FC<Props> = ({ questionNr,totalQs }) =>(
<div>
    <p className="number">Question: {questionNr}/{totalQs}</p>
</div>
)

export default QuestionCard