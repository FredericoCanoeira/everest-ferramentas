import React, { useState } from "react";
import "./AssessmentForm.css";
import Question from "../common/Question";

const competencies = {
  "Tomada de Decisão": [
    // As questões permanecem as mesmas...
  ],
};

const AssessmentForm = () => {
  const [currentCompetencyIndex, setCurrentCompetencyIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [category, setCategory] = useState("");

  const competenciesKeys = Object.keys(competencies);
  const currentCompetency = competenciesKeys[currentCompetencyIndex];
  const currentQuestions = competencies[currentCompetency];
  const currentQuestion = currentQuestions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers.push({
      competency: currentCompetency,
      questionId: currentQuestion.id,
      answer: answer.text,
      points: answer.points,
    });
    setAnswers(updatedAnswers);

    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentCompetencyIndex < competenciesKeys.length - 1) {
      setCurrentCompetencyIndex(currentCompetencyIndex + 1);
      setCurrentQuestionIndex(0);
    } else {
      // Calcula a pontuação máxima possível
      const maxScore = competenciesKeys.reduce((acc, key) => {
        return acc + competencies[key].reduce((sum, question) => sum + 10, 0);
      }, 0);

      // Calcula a pontuação total e a porcentagem
      const totalScore = updatedAnswers.reduce((acc, curr) => acc + curr.points, 0);
      const scorePercentage = Math.round((totalScore / maxScore) * 100);

      setFinalScore(scorePercentage);

      // Determina a categoria com base na pontuação percentual
      let finalCategory = "";
      if (scorePercentage >= 80) {
        finalCategory = "Líder Everest";
      } else if (scorePercentage >= 49) {
        finalCategory = "Líder Kilimanjaro";
      } else {
        finalCategory = "Líder Moco";
      }
      setCategory(finalCategory);

      setIsCompleted(true);
    }
  };

  const restartAssessment = () => {
    setCurrentCompetencyIndex(0);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setIsCompleted(false);
    setFinalScore(0);
    setCategory("");
  };

  return (
    <div className="assessment-form">
      {!isCompleted ? (
        <>
          <h3>Competência: {currentCompetency}</h3>
          <Question
            question={currentQuestion.text}
            options={currentQuestion.options}
            onAnswer={handleAnswer}
          />
        </>
      ) : (
        <div className="results">
          <h2>Resultado Final</h2>
          {/* Exibe a pontuação em porcentagem */}
          <p>Sua pontuação total: {finalScore}%</p>
          <p>Classificação: <strong>{category}</strong></p>
          <p>
            {category === "Líder Everest"
              ? "Parabéns! Você demonstrou competências de liderança extraordinárias."
              : category === "Líder Kilimanjaro"
              ? "Bom trabalho! Você possui uma boa base de liderança, mas pode melhorar."
              : "Nível inicial. Você precisa desenvolver diversas competências."}
          </p>
          <button onClick={restartAssessment}>
            Solicitar o relatório completo para conhecer os seus pontos fortes e áreas que necessitam melhorar
          </button>
        </div>
      )}
    </div>
  );
};

export default AssessmentForm;