import React from 'react'

const SelectCategory = ({onSelect}) => {
  return (
    <div className='index-page fadeInUp'>
    <div className="index-title fadeInUp">
      <h1>Qual quiz você deseja fazer?</h1>
      <p>As perguntas serão referentes aos temas abaixo</p>
    </div>
      <div className="quiz-btns popIn">
        <button onClick={() => onSelect(1)}>Conhecimentos gerais</button>
        <button onClick={() => onSelect(2)}>Lógica de programação</button>
        <button onClick={() => onSelect(3)}>História do Brasil</button>
      </div>
    </div>
  )
}

export default SelectCategory