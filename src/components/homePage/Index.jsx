import React from 'react'

import './index.css'

const index = ({handleAdvance}) => {
  return (
    <div className='fadeInUp'>
        <div className="index-title">
            <h1>React.Js Quiz</h1>
            <p>Seja bem vindo, clique no botão abaixo para começar!</p>
        </div>
        <div className="start-select">
            <button onClick={handleAdvance}><strong>Iniciar</strong></button>
        </div>      
    </div>

  )
}

export default index;