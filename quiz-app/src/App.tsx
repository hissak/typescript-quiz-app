import {useState} from 'react';
import QuestionCard from './components/QuestionCard';
import {fetchQuizQuestions} from './API';
import {Difficulty, QuestionState} from './API';
import { type } from 'os';

const TOTOL_QUESTIONS = 10;

type AnswerObject = {
  question: string
  answer: string
  correct: boolean
  correctAnswer: string
}

function App() {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [number, setNumber] = useState(0)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

const startTrivia = async () => {
  setLoading(true)
  setGameOver(false)

  const newQuestions = await fetchQuizQuestions(
    TOTOL_QUESTIONS,
    Difficulty.EASY
  )

  setQuestions(newQuestions)
  setScore(0)
  setUserAnswers([])
  setNumber(0)
  setLoading(false)
}
console.log('QUESTIONS', questions)

const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
}

const nextQuestion = () => {
}

  return (
    <div className='App'>
      <h1>React Quiz</h1>
      <button className='start' onClick={startTrivia}>
        Start
      </button>
      <p className='score'>Score:</p>
      <p>Loading Question ...</p>
      {/* <QuestionCard
       questionNr={number + 1}
        totalQuestions={TOTOL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
       /> */}
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
