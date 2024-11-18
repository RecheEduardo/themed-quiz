import React, { useState } from 'react'

export let userScore = 0;

export const Question1 = ({onNext , hintUsed}) => {
  const [guessed , isQuestionGuessed] = useState(false);
  const [rightAnswer , isRightAnswer] = useState(false);

  const rightAnswerHandle = () => {
    isQuestionGuessed(true);
    isRightAnswer(true);
    userScore++;
  }

  return (
    <>
      <div className="fadeInUp">
        <h3>Pergunta 1 de 3</h3>
        <h1>Qual dos seguintes itens possui apenas tipos primitivos usados em lógica de programação?</h1>
      </div>

      <div className="answers fadeInUp">
        <button 
          onClick={() => isQuestionGuessed(true)} 
          disabled={guessed}
        >
          Inteiro, Temporal, Caractere, Double
        </button>
        
        <button 
          onClick={() => isQuestionGuessed(true)} 
          disabled={guessed}
        >
          Booleano, Real, Inteiro, Irracional
        </button>
        
        <button 
          onClick={() => isQuestionGuessed(true)} 
          disabled={guessed}
        >
          Inteiro, Booleano, Tipografia, Double
        </button>

        <button 
          onClick={rightAnswerHandle} // resposta certa
          disabled={guessed? isRightAnswer? false : false : false}
          className={guessed? 'right-answer' : 'answers'}
        >
          Inteiro, Booleano, Caractere, Double
        </button>
        
      </div>
      
      {hintUsed && !guessed? 
        <div className="hint-used answers fadeInUp">
          <button disabled>
            <p>"Valores que contam. Verdades ou mentiras. Palavras. Precisão..."</p>
          </button>
        </div>
        :
        hintUsed && guessed && ''
      }

      {guessed ?
        <div className='next-question'>
          <h4>{rightAnswer ? "Resposta Certa!" : "Resposta Errada!"}</h4>
          <button onClick={onNext}>Próxima</button>
        </div>
        :
        '' 
      }
    </>
  )
}

export const Question2 = ({onNext , hintUsed}) => {
  const [guessed , isQuestionGuessed] = useState(false);
  const [rightAnswer , isRightAnswer] = useState(false);

  const rightAnswerHandle = () => {
    isQuestionGuessed(true);
    isRightAnswer(true);
    userScore++;
  }

  return (
    <>
      <div className="fadeInUp">
        <h3>Pergunta 2 de 3</h3>
        <h1>Para que serve uma biblioteca?</h1>
      </div>

      <div className="answers fadeInUp">
        <button 
          onClick={() => isQuestionGuessed(true)} 
          disabled={guessed? true : false}
        >
          Para que os usuários possam consultar e tomar emprestados livros de assuntos variados.
        </button>
        
        <button 
          onClick={() => isQuestionGuessed(true)} 
          disabled={guessed? true : false}
        >
          Para modularizar o desenvolvimento de estruturas de comparação e repetição.
        </button>
        
        <button 
          onClick={() => isQuestionGuessed(true)} 
          disabled={guessed? true : false}
        >
          Uma biblioteca é um programa que permite escrever e testar código-fonte, também conhecida como IDE.
        </button>    

        <button 
          onClick={rightAnswerHandle} // resposta certa
          disabled={guessed? isRightAnswer? false : false : false}
          className={guessed? 'right-answer' : 'answers'}
        >
          Uma biblioteca é um arquivo que organiza código pré-definido para o uso em aplicações.
        </button>
        
      </div>
      
      {hintUsed && !guessed? 
        <div className="hint-used answers fadeInUp">
          <button disabled>
            <p>"Um lugar onde o código encontra atalhos, anteriormente feito para facilitar o trabalho..."</p>
          </button>
        </div>
        :
        hintUsed && guessed && '' 
      }

      {guessed ?
        <div className='next-question'>
          <h4>{rightAnswer ? "Resposta Certa!" : "Resposta Errada!"}</h4>
          <button onClick={onNext}>Próxima</button>
        </div>
        :
        '' 
      }
    </>
  )
}

export const Question3 = ({onNext , hintUsed }) => {
  const [guessed , isQuestionGuessed] = useState(false);
  const [rightAnswer , isRightAnswer] = useState(false);

  const rightAnswerHandle = () => {
    isQuestionGuessed(true);
    isRightAnswer(true);
    userScore++;
  }

  return (
    <>
      <div className="fadeInUp">
        <h3>Pergunta 3 de 3</h3>
        <h1>Qual é a definição de algoritmo?</h1>
      </div>

      <div className="answers fadeInUp">
        <button 
          onClick={() => isQuestionGuessed(true)} 
          disabled={guessed? true : false}
        >
          Um conjunto de blocos de programas pré-formatados
        </button>
        
        <button 
          onClick={rightAnswerHandle} // resposta certa
          disabled={guessed? isRightAnswer? false : false : false}
          className={guessed? 'right-answer' : 'answers'}
        >
          Um passo a passo que gera um resultado
        </button>
        
        <button 
          onClick={() => isQuestionGuessed(true)} 
          disabled={guessed? true : false}
        >
          Uma forma de organizar pensamentos para traduzir o raciocínio lógico humano para a linguagem das máquinas
        </button>

        <button 
          onClick={() => isQuestionGuessed(true)} 
          disabled={guessed? true : false}
        >
          Uma linguagem de programação
        </button>

      </div>
      
      {hintUsed && !guessed?
        <div className="hint-used answers fadeInUp">
          <button disabled>
            <p>"Como uma receita de bolo..."</p>
          </button>
        </div>
        :
        hintUsed && guessed && ''
      }

      {guessed ?
        <div className='next-question'>
          <h4>{rightAnswer ? "Resposta Certa!" : "Resposta Errada!"}</h4>
          <button onClick={onNext}>Ver resultado</button>
        </div>
        :
        '' 
      }
    </>
  )
}