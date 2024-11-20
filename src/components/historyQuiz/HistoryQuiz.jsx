import React, { useState } from 'react'
import { Question1 , Question2, Question3  } from './HistoryQuestions'
import HistoryResult from './HistoryResult';

const HistoryQuiz = () => {
  const [questionNumber , setQuestionNumber] = useState(0);

  const [hintUsed , isHintUsed] = useState(false);

  const handleNext = () => {
    setQuestionNumber((prevNumber)=> prevNumber + 1);
    isHintUsed(false);
  }

  const HistoryQuestions = [
    <Question1 onNext={handleNext} hintUsed={hintUsed}/>,
    <Question2 onNext={handleNext} hintUsed={hintUsed}/>,
    <Question3 onNext={handleNext} hintUsed={hintUsed}/>,
    <HistoryResult/>
  ]

  return (
    <div className='questions-container popUp'>
      {questionNumber == 3? 
        <h1 style={{textAlign: 'center', paddingBottom: '20px'}} className='fadeInDown'>Resultado</h1> 
      : 
      <div className="question-title">
        <h1>História do Brasil</h1>
        <button className={hintUsed ? 'hidden' : 'hint'} onClick={() => isHintUsed(true)}>Dica</button>
      </div>}
      {HistoryQuestions[questionNumber]}
    </div>
  )
}

export default HistoryQuiz