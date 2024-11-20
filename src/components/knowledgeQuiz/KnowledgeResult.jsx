import React from 'react'

import { userScore } from './KnowledgeQuestions'

const KnowledgeResult = () => {
  return (
    <div className='result-quiz popIn'>
      <h1>Seu aproveitamento final é: <span>{parseFloat((userScore / 3) * 100).toFixed(1)}</span> %</h1>
      <p>Você acertou <strong>{userScore}</strong> de 3 questões</p>
      <a href="./"><button className='back-btn'>Voltar</button></a>
    </div>
  )
}

export default KnowledgeResult