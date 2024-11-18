import React from 'react'

import { userScore } from './ProgrammingQuestions'

const ProgrammingResult = () => {
  return (
    <div className='result-quiz popIn'>
      <h1>Seu aproveitamento final é: <span>{parseFloat((userScore / 3) * 100).toFixed(1)}</span> %</h1>
      <p>Você acertou <strong>{userScore}</strong> de 3 questões</p>
      <a href="../chooseQuiz/Choose.jsx"><button className='back-btn'>Voltar</button></a>
    </div>
  )
}

export default ProgrammingResult