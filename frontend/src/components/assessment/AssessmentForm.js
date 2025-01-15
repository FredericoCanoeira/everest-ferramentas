import React, { useState } from "react";
import "./AssessmentForm.css";
import Question from "../common/Question";
import { useNavigate } from "react-router-dom";


// Objeto com as competências e questões integradas
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
  // Outras competências
};

const AssessmentForm = () => {
  const [currentCompetencyIndex, setCurrentCompetencyIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [category, setCategory] = useState(""); // Novo estado para a categoria
  const [followUpAnswer, setFollowUpAnswer] = useState(""); // Armazenar respostas de follow-up

  const navigate = useNavigate(); // Inicializa o hook useNavigate

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
      followUpAnswer: followUpAnswer || null, // Inclui a resposta de follow-up se aplicável
    });
    setAnswers(updatedAnswers);
    setFollowUpAnswer(""); // Reseta o follow-up para a próxima questão

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
      //const totalScore = updatedAnswers.reduce((acc, curr) => acc + curr.points, 0);
      //setFinalScore(totalScore);

      // Calcula a pontuação total e a porcentagem
      const totalScore = updatedAnswers.reduce((acc, curr) => acc + curr.points, 0);
      const scorePercentage = Math.round((totalScore / maxScore) * 100);

      setFinalScore(scorePercentage);

      // Determinando a categoria com base na pontuação percentual
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
  const handleRedirectToPayment = () => {
    navigate("/PaymentInformation"); // Redireciona para a página de pagamento
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
          {currentQuestion.options.some((opt) => opt.followUp) && (
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
          </div>
        )}
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
              : "Nível inicial. Você Precisa desenvolver diversas competências."}
          </p>
          
          <button onClick={handleRedirectToPayment}>
            Solicitar o relatório completo para conhecer os seus pontos fortes e áreas que necessita melhorar</button>
        </div>
      )}
    </div>
  );
};

export default AssessmentForm;