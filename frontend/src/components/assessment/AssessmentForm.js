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
  "Controlo de gestão": [
    {
      id: 1,
      text: "Tem definidos os indicadores de desempenho do ano corrente da área sob sua responsabilidade?",
      options: [
        {
          text: "Sim",
          points: 4,
          followUp: "Por favor, listar no campo abaixo os indicadores de desempenho do ano corrente da área sob sua responsabilidade",
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
      text: "Existe um Dashboard de Monitorização do Desempenho (KPI e Metas) da área sob sua responsabilidade?",
      options: [
        {
          text: "Sim",
          points: 10,
          followUp: "Por favor, anexar o Dashboard de Monitorização do Desempenho (KPI e Metas) da área sob sua responsabilidade",
          inputType: "file",
        },
        {
          text: "Não",
          points: 0,
        },
      ],
    },
    {
      id: 3,
      text: "No último mês elaborou e remeteu ao seu superior hierárquico o Relatório de actividades da área sob sua responsabilidade?",
      options: [
        {
          text: "Sim",
          points: 10,
          followUp: "Por favor, anexar o Relatório de Gestão/ Desempenho do último mês da área sob sua responsabilidade",
          inputType: "file",
        },
        {
          text: "Não",
          points: 0,
        },
      ],
    },
  ],
  "Planeamento e organização do trabalho": [
    {
      id: 1,
      text: "Semanalmente, cria uma Lista de Prioridades?",
      options: [
        {
          text: "Sim",
          points: 4,
          followUp: "Por favor, listar no campo abaixo a Lista de Prioridades referente às últimas duas semanas",
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
      text: "Tem rotinas definidas de acompanhamento do trabalho dos elementos da equipa?",
      options: [
        {
          text: "Sim",
          points: 4,
          followUp: "Por favor, listar no campo abaixo as rotinas de acompanhamento do trabalho dos elementos da equipa sob sua responsabilidade",
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
      text: "Nos últimas 3 semanas realizou alguma sessão de trabalho em grupo com a equipa para acompanhamento da execução dos objectivos e actividades?",
      options: [
        {
          text: "Sim",
          points: 10,
          followUp: "Por favor, anexar a evidência da última sessão de trabalho em grupo realizada com a equipa para acompanhamento da execução dos objectivos e actividades",
          inputType: "file",
        },
        {
          text: "Não",
          points: 0,
        },
      ],
    },
    {
      id: 4,
      text: "Existe um Mapa de tarefas da equipa?",
      options: [
        {
          text: "Sim",
          points: 10,
          followUp: "Por favor, anexar o Mapa de tarefas da equipa",
          inputType: "file",
        },
        {
          text: "Não",
          points: 0,
        },
      ],
    },
  ],
  "Desenvolvimento e supervisão da equipa": [
    {
      id: 1,
      text: "Nos últimos 12 meses realizou um diagnóstico de competências dos elementos da equipa?",
      options: [
        {
          text: "Sim",
          points: 10,
          followUp: "Por favor, anexar o último relatório de diagnóstico de competências dos elementos da equipa sob sua responsabilidade",
          inputType: "file",
        },
        {
          text: "Não",
          points: 0,
        },
      ],
    },
    {
      id: 2,
      text: "Tem um plano de desenvolvimento de competências do ano corrente dos elementos da equipa?",
      options: [
        {
          text: "Sim",
          points: 10,
          followUp: "Por favor, anexar o plano de desenvolvimento de competências do ano corrente dos elementos da equipa sob sua responsabilidade",
          inputType: "file",
        },
        {
          text: "Não",
          points: 0,
        },
      ],
    },
    {
      id: 3,
      text: "Tem uma Mapa de registos diários da equipa?",
      options: [
        {
          text: "Sim",
          points: 10,
          followUp: "Por favor, anexar o Mapa de registos diários da equipa sob sua responsabilidade",
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

// Componente principal do formulário de avaliação
const AssessmentForm = () => {
  // Estados para o controle do formulário
  const [currentCompetencyIndex, setCurrentCompetencyIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [category, setCategory] = useState("");
  const [followUpAnswer, setFollowUpAnswer] = useState("");
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [categoryMessage, setCategoryMessage] = useState(""); // Variável de estado para a mensagem de categoria

  const navigate = useNavigate();

  // Obtenção das questões da competência atual
  const competenciesKeys = Object.keys(competencies);
  const currentCompetency = competenciesKeys[currentCompetencyIndex];
  const currentQuestions = competencies[currentCompetency];
  const currentQuestion = currentQuestions[currentQuestionIndex];

  // Função para processar a resposta do usuário
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

    // Avança para a próxima questão ou competência
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentCompetencyIndex < competenciesKeys.length - 1) {
      setCurrentCompetencyIndex(currentCompetencyIndex + 1);
      setCurrentQuestionIndex(0);
    } else {
      // Calcula a pontuação total e categoria
      const maxScore = competenciesKeys.reduce((acc, key) => {
        return acc + competencies[key].reduce((sum, question) => {
          const maxPoints = Math.max(...question.options.map((option) => option.points));
          return sum + maxPoints;
        }, 0);
      }, 0);

      const totalScore = updatedAnswers.reduce((acc, curr) => acc + curr.points, 0);
      const scorePercentage = Math.round((totalScore / maxScore) * 100);

      setFinalScore(scorePercentage);

      // Determina a categoria com base na pontuação
      let finalCategory = "";
      let message = "";
      if (totalScore >= 80) {
        finalCategory = "Líder Everest";
        message = "Parabéns! Você demonstrou competências de liderança extraordinárias.";
      } else if (totalScore >= 49) {
        finalCategory = "Líder Kilimanjaro";
        message = "Bom trabalho! Você possui uma boa base de liderança, mas pode melhorar.";
      } else {
        finalCategory = "Líder Moco";
        message = "Nível inicial. Você precisa desenvolver diversas competências.";
      }
      setCategory(finalCategory);
      setCategoryMessage(message); // Define a mensagem correspondente
      setIsCompleted(true); // Marca a avaliação como concluída
    }
  };

  // Função que lida com a resposta do usuário
  const handleAnswer = (answer) => {
    if (answer.text === "Sim" && answer.followUp) {
      setShowFollowUp(true); // Exibe o follow-up se a resposta for "Sim"
    } else {
      processAnswer(answer); // Processa diretamente se não houver follow-up
    }
  };

  // Função para submeter o follow-up (resposta adicional)
  const handleFollowUpSubmit = () => {
    if (followUpAnswer) {
      const answer = currentQuestion.options.find((opt) => opt.text === "Sim");
      processAnswer(answer); // Processa a resposta do follow-up
    } else {
      alert("Por favor, complete o campo de follow-up antes de continuar.");
    }
  };

  // Função para redirecionar para a página de pagamento
  const handleRedirectToPayment = () => {
    navigate("/PaymentInformation");
  };

  return (
    <div className="assessment-form">
      {!isCompleted ? (
        <>
          <h3 className="competency-title">Competência: {currentCompetency}</h3>
          {!showFollowUp ? (
            <div className="question-container">
            <Question
              question={currentQuestion.text}
              options={currentQuestion.options}
              onAnswer={handleAnswer}
            />
            </div>
          ) : (
            // Renderiza apenas o follow-up (campo adicional)
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
                  onChange={(e) => setFollowUpAnswer(e.target.files[0] || null)}
                />
              )}
              <button onClick={handleFollowUpSubmit}>Enviar</button>
            </div>
          )}
        </>
      ) : (
        // Exibe os resultados finais após a conclusão
        <div className="results">
          <h2>Resultado Final</h2>
          <p>Sua pontuação total: {finalScore}%</p>
          <p>Classificação: <strong>{category}</strong></p>
          <p>{categoryMessage}</p> {/* Exibe a mensagem correspondente à categoria */}
          <button className="final-result-button" onClick={handleRedirectToPayment}>
            Solicitar o relatório completo para conhecer os seus pontos fortes e áreas que necessita melhorar
          </button>
        </div>
      )}
    </div>
  );
};

export default AssessmentForm;
