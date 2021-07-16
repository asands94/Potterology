import React, { useState } from 'react'
import quiz from "./hogsmeadeQuizQuestions"
import HogsmeadeImg from "./Hogsmeade.png"

export default function HogsmeadeQuiz() {
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [currentQuestion, setcurrentQuestions] = useState(0)

  const nextQuestion = currentQuestion + 1

  const getNextQuestion = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    if (nextQuestion < quiz.length) {
      setcurrentQuestions(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <>
      <img className="main-images main-bg" src={HogsmeadeImg} alt="Hogwarts" />
      <div className="quiz-container">
        {showScore ? (<p>You got {score} out of {quiz.length} correct! </p>) :
          (<>
            <h2>{quiz[currentQuestion].question}</h2>
            {quiz[currentQuestion].answers.map((answer, index) => {
              return (
                <div className="quiz-button-container" key={index}>
                  <button className="quiz-buttons" onClick={() => getNextQuestion(answer.isCorrect)} >{answer.answer}</button>
                </div>
              )
            })}</>)}
      </div>
    </>
  )
}
