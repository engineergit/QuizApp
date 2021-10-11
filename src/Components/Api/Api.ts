import { shuffleArray } from "../../utils";

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: any;
    question: string;
    type: string
}

export type QuestionState = Question & { answers: string[] }

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchData = async (
    number: number, 
    difficulty: Difficulty
    ) => {
    const endpoint = `https://opentdb.com/api.php?amount=${number}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    console.log("data from api : ", data);
  
    return data.results.map((question: Question) => (
        {
            ...question,
            answers: ([...question.incorrect_answers, question.correct_answer])
        }
        )
    )
}
