import React, { useState } from 'react'
import { Question1 , Question2, Question3  } from './KnowledgeQuestions'
import KnowledgeResult from './KnowledgeResult';

const KnowledgeQuiz = () => {
  const [questionNumber , setQuestionNumber] = useState(0);

  const [hintUsed , isHintUsed] = useState(false);

  const handleNext = () => {
    isHintUsed(false);
    setQuestionNumber((prevNumber)=> prevNumber + 1);
  }

  const handleHint = () => {
    isHintUsed(true);
  }

  const KnowledgeQuestions = [
    <Question1 onNext={handleNext} hintUsed={hintUsed}/>,
    <Question2 onNext={handleNext} hintUsed={hintUsed}/>,
    <Question3 onNext={handleNext} hintUsed={hintUsed}/>,
    <KnowledgeResult />
  ]

  return (
    <div className='questions-container popUp'>
      {questionNumber === 3? (
        <h1 style={{textAlign: 'center', paddingBottom: '20px'}} className='fadeInDown'>Resultado</h1> 
      ) : ( 
        <div className="question-title">
          <h1>Conhecimentos gerais</h1>
          { hintUsed ?
            ''
            :
            <button className='hint' onClick={handleHint}>Dica</button>
          }        
        </div>
      )}
      {KnowledgeQuestions[questionNumber]}
    </div>
  )
}

export default KnowledgeQuiz