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
  if (!gameOver) {
    const answer = e.currentTarget.value
    const correct = questions[number].correct_answer === answer
    if (correct) setScore(prev => prev + 1)
    const answerObject = {
      question: questions[number].question,
      answer,
      correct,
      correctAnswer: questions[number].correct_answer
    }
    setUserAnswers(prev => [...prev, answerObject])
  }
}

const nextQuestion = () => {
}

  return (
    <div className='App'>
      <h1>React Quiz</h1>
      {gameOver || userAnswers.length === TOTOL_QUESTIONS ? (
        <button className='start' onClick={startTrivia}>
          Start
        </button>
      ) : null
      }
      {!gameOver && <p className='score'>Score:</p>}
      {loading && <p>Loading Questions...</p>}

      {!loading && !gameOver && (
      <QuestionCard
       questionNr={number + 1}
        totalQuestions={TOTOL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
       />
      )}
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTOL_QUESTIONS - 1 ? (
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
      ) : null}
    </div>
  );
}

export default App;
