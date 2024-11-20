import { useState } from "react";

export let userScore = 0;

export const Question1 = ({ onNext , hintUsed }) => {
  const [guessed, isQuestionGuessed] = useState(false);
  const [rightAnswer, isRightAnswer] = useState(false);

  const rightAnswerHandle = () => {
    isQuestionGuessed(true);
    isRightAnswer(true);
    userScore++;
  };

  return (
    <>
      <div className="fadeInUp">
        <h3>Pergunta 1 de 3</h3>
        <h1>Onde se localiza Machu Picchu?</h1>
      </div>

      <div className="answers fadeInUp">
        <button 
          onClick={rightAnswerHandle} // resposta certa
          disabled={guessed ? isRightAnswer ? false : false : false}
          className={guessed ? "right-answer" : "answers"}
        >
          Peru
        </button>

        <button 
          onClick={() => isQuestionGuessed(true)} 
          disabled={guessed ? true : false}
        >
          Bolívia
        </button>

        <button 
          onClick={() => isQuestionGuessed(true)} 
          disabled={guessed ? true : false}
        >
          Chile
        </button>

        <button 
          onClick={() => isQuestionGuessed(true)} 
          disabled={guessed ? true : false}
        >
          Colômbia
        </button>
      </div>

      {hintUsed && !guessed ? 
        <div className="hint-used answers fadeInUp">
          <button disabled>
            <p>"Um país famoso por sua antiga civilização e pelos Andes que tocam o céu."</p>
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
  );
};

export const Question2 = ({ onNext, hintUsed }) => {
  const [guessed, isQuestionGuessed] = useState(false);
  const [rightAnswer, isRightAnswer] = useState(false);

  const rightAnswerHandle = () => {
    isQuestionGuessed(true);
    isRightAnswer(true);
    userScore++;
  };

  return (
    <>
      <div className="fadeInUp">
        <h3>Pergunta 2 de 3</h3>
        <h1>Quais as duas línguas mais faladas no mundo?</h1>
      </div>

      <div className="answers fadeInUp">
        <button 
          onClick={() => isQuestionGuessed(true)} 
          disabled={guessed ? true : false}
        >
          Inglês e espanhol
        </button>

        <button 
          onClick={rightAnswerHandle} // resposta certa
          disabled={guessed ? isRightAnswer ? false : false : false}
          className={guessed ? "right-answer" : "answers"}
        >
          Inglês e mandarim chinês
        </button>

        <button 
          onClick={() => isQuestionGuessed(true)} 
          disabled={guessed ? true : false}
        >
          Mandarim chinês e francês
        </button>

        <button 
          onClick={() => isQuestionGuessed(true)} 
          disabled={guessed ? true : false}
        >
          Inglês e português
        </button>
      </div>

      {hintUsed && !guessed ? 
        <div className="hint-used answers fadeInUp">
          <button disabled>
            <p>"Uma é a língua do dragão e da muralha infinita; a outra, do Tio Sam e do Big Ben."</p>
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
  );
};

export const Question3 = ({ onNext, hintUsed }) => {
  const [guessed, isQuestionGuessed] = useState(false);
  const [rightAnswer, isRightAnswer] = useState(false);

  const rightAnswerHandle = () => {
    isQuestionGuessed(true);
    isRightAnswer(true);
    userScore++;
  };

  return (
    <>
      <div className="fadeInUp">
        <h3>Pergunta 3 de 3</h3>
        <h1>Qual o nome popular do cloreto de sódio?</h1>
      </div>

      <div className="answers fadeInUp">
        <button 
          onClick={() => isQuestionGuessed(true)} 
          disabled={guessed ? true : false}
        >
          Vinagre
        </button>

        <button 
          onClick={() => isQuestionGuessed(true)} 
          disabled={guessed ? true : false}
        >
          Água
        </button>

        <button 
          onClick={rightAnswerHandle} // resposta certa
          disabled={guessed ? isRightAnswer ? false : false : false}
          className={guessed ? "right-answer" : "answers"}
        >
          Sal de Cozinha
        </button>

        <button 
          onClick={() => isQuestionGuessed(true)} 
          disabled={guessed ? true : false}
        >
          Fermento
        </button>
      </div>

      {hintUsed && !guessed ? 
        <div className="hint-used answers fadeInUp">
          <button disabled>
            <p>"Branco como a neve, mas reina na cozinha, temperando a vida!"</p>
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
  );
};