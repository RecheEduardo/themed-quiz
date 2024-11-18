import React, { useState } from "react";

// Tela de seleção do quiz
import SelectCategory from "../selectCategory/SelectCategory";

// Importando as opções de quiz
import HistoryQuiz from '../historyQuiz/historyQuiz'
import KnowledgeQuiz from "../knowledgeQuiz/KnowledgeQuiz";
import ProgrammingQuiz from "../programmingQuiz/ProgrammingQuiz";

const Choose = () => {

  const [selectedQuiz , setSelectedQuiz] = useState(0);

  const quizList = [
    <SelectCategory onSelect={setSelectedQuiz} />,
    <KnowledgeQuiz />,
    <ProgrammingQuiz />,
    <HistoryQuiz />
  ];

  return (
    <>
      {quizList[selectedQuiz] || "Pagina inexistente"}
    </>
  );
};

export default Choose;
