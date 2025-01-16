import React, { useState } from "react";
import "./AssessmentForm.css";
import Question from "../common/Question";
import { useNavigate } from "react-router-dom";

const competencies = {
  "Visão Estratégica e Planeamento Estratégico": [
    {
      id: 1,
      text: "Conhece os objectivos estratégicos da sua empresa?",
      options: [
        {
          text: "Sim",
          points: 4,
          followUp: "Por favor, listar no campo abaixo os objectivos estratégicos da empresa",
          inputType: "textarea",
        },
        {
          text: "Não",
          points: 0,
        },
      ],
    },
    {
      id: 2,
      text: "Tem definidos os objectivos desempenho do ano corrente da área sob sua responsabilidade?",
      options: [
        {
          text: "Sim",
          points: 4,
          followUp: "Por favor, listar no campo abaixo os objectivos desempenho do ano corrente da área sob sua responsabilidade",
          inputType: "textarea",
        },
        {
          text: "Não",
          points: 0,
        },
      ],
    },
    {
      id: 3,
      text: "Existe um Plano de actividades da área sob sua responsabilidade?",
      options: [
        {
          text: "Sim",
          points: 10,
          followUp: "Por favor, anexar o Plano de actividades da área sob sua responsabilidade",
          inputType: "file",
        },
        {
          text: "Não",
          points: 0,
        },
      ],
    },
  ],
};

const AssessmentForm = () => {
  const [currentCompetencyIndex, setCurrentCompetencyIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [category, setCategory] = useState("");
  const [followUpAnswer, setFollowUpAnswer] = useState("");
  const [showFollowUp, setShowFollowUp] = useState(false);

  const navigate = useNavigate();

  const competenciesKeys = Object.keys(competencies);
  const currentCompetency = competenciesKeys[currentCompetencyIndex];
  const currentQuestions = competencies[currentCompetency];
  const currentQuestion = currentQuestions[currentQuestionIndex];

  // Processa a resposta
  const processAnswer = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers.push({
      competency: currentCompetency,
      questionId: currentQuestion.id,
      answer: answer.text,
      points: answer.points,
      followUpAnswer: followUpAnswer || null,
    });
    setAnswers(updatedAnswers);
    setFollowUpAnswer(""); // Reseta o follow-up
    setShowFollowUp(false); // Oculta o follow-up ao avançar

    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentCompetencyIndex < competenciesKeys.length - 1) {
      setCurrentCompetencyIndex(currentCompetencyIndex + 1);
      setCurrentQuestionIndex(0);
    } else {
      const maxScore = competenciesKeys.reduce((acc, key) => {
        return acc + competencies[key].reduce((sum) => sum + 10, 0);
      }, 0);
      const totalScore = updatedAnswers.reduce((acc, curr) => acc + curr.points, 0);
      const scorePercentage = Math.round((totalScore / maxScore) * 100);

      setFinalScore(scorePercentage);

      let finalCategory = "";
      if (totalScore >= 80) {
        finalCategory = "Líder Everest";
      } else if (totalScore >= 49) {
        finalCategory = "Líder Kilimanjaro";
      } else {
        finalCategory = "Líder Moco";
      }
      setCategory(finalCategory);
      setIsCompleted(true);
    }
  };

  // Manipula a resposta
  const handleAnswer = (answer) => {
    if (answer.text === "Sim" && answer.followUp) {
      setShowFollowUp(true); // Exibe o follow-up
    } else {
      processAnswer(answer); // Processa diretamente para outras opções
    }
  };

  // Submete o follow-up
  const handleFollowUpSubmit = () => {
    if (followUpAnswer) {
      const answer = currentQuestion.options.find((opt) => opt.text === "Sim");
      processAnswer(answer);
    } else {
      alert("Por favor, complete o campo de follow-up antes de continuar.");
    }
  };

  const handleRedirectToPayment = () => {
    navigate("/PaymentInformation");
  };

  return (
    <div className="assessment-form">
      {!isCompleted ? (
        <>
          <h3>Competência: {currentCompetency}</h3>
          {!showFollowUp ? (
            <Question
              question={currentQuestion.text}
              options={currentQuestion.options}
              onAnswer={handleAnswer}
            />
          ) : (
            // Renderiza apenas o follow-up
            <div className="follow-up">
              <p>{currentQuestion.options.find((opt) => opt.text === "Sim")?.followUp}</p>
              {currentQuestion.options.find((opt) => opt.inputType === "textarea") && (
                <textarea
                  value={followUpAnswer}
                  onChange={(e) => setFollowUpAnswer(e.target.value)}
                  placeholder="Digite sua resposta aqui"
                />
              )}
              {currentQuestion.options.find((opt) => opt.inputType === "file") && (
                <input
                  type="file"
                  onChange={(e) => setFollowUpAnswer(e.target.files[0]?.name || "")}
                />
              )}
              <button onClick={handleFollowUpSubmit}>Enviar</button>
            </div>
          )}
        </>
      ) : (
        <div className="results">
          <h2>Resultado Final</h2>
          <p>Sua pontuação total: {finalScore}%</p>
          <p>Classificação: <strong>{category}</strong></p>
          <button onClick={handleRedirectToPayment}>
            Solicitar o relatório completo
          </button>
        </div>
      )}
    </div>
  );
};

export default AssessmentForm;
