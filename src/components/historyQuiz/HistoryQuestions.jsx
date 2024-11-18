import { useState } from "react";

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
        <h1>Quem foi o primeiro presidente do Brasil?</h1>
      </div>

      <div className="answers fadeInUp">
        <button 
          onClick={() => isQuestionGuessed(true)} 
          disabled={guessed? true : false}
          className=''
        >
          Dom Pedro I
        </button>
        
        <button 
          onClick={() => isQuestionGuessed(true)} 
          disabled={guessed? true : false}
          className=''
        >
          Floriano Peixoto
        </button>
        
        <button 
          onClick={() => isQuestionGuessed(true)} 
          disabled={guessed? true : false}
          className=''
        >
          Getúlio Vargas
        </button>   

        <button 
          onClick={rightAnswerHandle} // resposta certa
          disabled={guessed? isRightAnswer? false : false : false}
          className={guessed? 'right-answer' : ''}
        >
          Deodoro da Fonseca
        </button>
        
      </div>
      
      {hintUsed ? 
        <div className="hint-used answers fadeInUp">
          <button disabled>
            <p>"Um marechal deu adeus ao trono e olá à República..."</p>
          </button>
        </div>
        :
        ''
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
        <h1>Qual das figuras históricas abaixo assinou a Lei Áurea?</h1>
      </div>

      <div className="answers fadeInUp">
        <button 
          onClick={() => isQuestionGuessed(true)} 
          disabled={guessed? true : false}
          className=''
        >
          João Goulart
        </button>
        
        <button 
          onClick={rightAnswerHandle} // resposta certa
          disabled={guessed? isRightAnswer? false : false : false}
          className={guessed? 'right-answer' : ''}
        >
          Princesa Isabel
        </button>
        
        <button 
          onClick={() => isQuestionGuessed(true)} 
          disabled={guessed? true : false}
          className=''
        >
          Eurico Gaspar Dutra
        </button>

        <button 
          onClick={() => isQuestionGuessed(true)} 
          disabled={guessed? true : false}
          className=''
        >
          Dom Pedro II
        </button>
        
      </div>
      
      {hintUsed ? 
        <div className="hint-used answers fadeInUp">
          <button disabled>
            <p>"Com pena na mão e coração decidido, a prole do imperador apagou as correntes da história do Brasil."</p>
          </button>
        </div>
        :
        ''
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
export const Question3 = ({onNext , hintUsed}) => {
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
        <h1>Em que ano foi instaurada a Constituição Brasileira em vigor atualmente?</h1>
      </div>

      <div className="answers fadeInUp">
        <button 
          onClick={() => isQuestionGuessed(true)} 
          disabled={guessed? true : false}
          className=''
        >
          1964
        </button>

        <button 
          onClick={() => isQuestionGuessed(true)} 
          disabled={guessed? true : false}
          className=''
        >
          1977
        </button>
        
        <button 
          onClick={rightAnswerHandle} // resposta certa
          disabled={guessed? isRightAnswer? false : false : false}
          className={guessed? 'right-answer' : ''}
        >
          1988
        </button>      

        <button 
          onClick={() => isQuestionGuessed(true)} 
          disabled={guessed? true : false}
          className=''
        >
          1990
        </button>
        
      </div>
      
      {hintUsed ? 
        <div className="hint-used answers fadeInUp">
          <button disabled>
            <p>"No final do século 20, o Brasil olhou para o futuro com uma nova democracia..."</p>
          </button>
        </div>
        :
        ''
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