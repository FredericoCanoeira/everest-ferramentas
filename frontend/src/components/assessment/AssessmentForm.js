import React, { useState } from "react";
import "./AssessmentForm.css";
import Question from "../common/Question";

const competencies = {

"Tomada de Decisão": [
  {
    id: 1,
    text: "Sua equipe está atrasada na entrega de um projeto importante. O que você faz?",
    options: [
      { text: "Reúno a equipe para identificar os obstáculos e ajustar o cronograma.", points: 10 }, // Melhor resposta: liderança colaborativa.
      { text: "Trabalho mais horas para compensar o atraso sozinho.", points: 5 }, // Resposta aceitável, mas individualista.
      { text: "Pressiono a equipe para acelerar a entrega, mesmo com possível perda de qualidade.", points: 3 }, // Foco no resultado, mas ignora qualidade e equipe.
      { text: "Informo o cliente sobre o atraso e não faço ajustes no planejamento.", points: 0 }, // Não resolve o problema.
    ],
  },
  {
    id: 2,
    text: "Você precisa escolher entre duas propostas: uma mais barata com riscos moderados e outra mais cara com baixo risco. Qual decisão toma?",
    options: [
      { text: "Opto pela mais cara para evitar riscos.", points: 7 }, // Decisão prudente, mas não necessariamente estratégica.
      { text: "Analiso os riscos de ambas, consulto a equipe e escolho a mais estratégica.", points: 10 }, // Melhor resposta: análise e consulta estratégica.
      { text: "Escolho a proposta mais barata para economizar custos.", points: 5 }, // Boa resposta, mas pode ignorar riscos importantes.
      { text: "Adio a decisão para ganhar mais tempo.", points: 2 }, // Evita agir, demonstra indecisão.
    ],
  },
  {
    id: 3,
    text: "Um cliente importante pede uma solução fora do escopo do projeto. Como você reage?",
    options: [
      { text: "Avalio o impacto e custo da solicitação antes de responder.", points: 10 }, // Melhor resposta: análise cuidadosa.
      { text: "Aceito a solicitação sem avaliar para agradar o cliente.", points: 3 }, // Demonstra falta de análise, mas atende ao cliente.
      { text: "Recuso imediatamente para manter o foco no escopo.", points: 5 }, // Boa resposta, mas poderia avaliar o impacto.
      { text: "Digo que vou verificar, mas não tomo nenhuma atitude.", points: 0 }, // Não resolve o problema.
    ],
  },
  {
    id: 4,
    text: "Um problema inesperado interrompe um processo crucial. O que você faz primeiro?",
    options: [
      { text: "Analiso rapidamente a causa do problema e tomo uma decisão para solucioná-lo.", points: 10 }, // Melhor resposta: ação e análise.
      { text: "Espero que a situação se resolva sozinha.", points: 0 }, // Passividade, não resolve o problema.
      { text: "Informo a liderança e aguardo instruções.", points: 5 }, // Resposta válida, mas sem iniciativa direta.
      { text: "Tomo uma decisão imediata sem avaliar as consequências.", points: 3 }, // Demonstra ação, mas sem análise.
    ],
  },
  {
    id: 5,
    text: "Dois membros da equipe estão em conflito, prejudicando o andamento do projeto. Como você age?",
    options: [
      { text: "Chamo ambos para conversar e encontrar uma solução conjunta.", points: 10 }, // Melhor resposta: promove resolução colaborativa.
      { text: "Ignoro o conflito para não me envolver.", points: 0 }, // Passividade, não resolve o problema.
      { text: "Escolho o lado de quem considero mais competente.", points: 3 }, // Pode gerar mais conflitos na equipe.
      { text: "Afasto um dos membros da equipe sem ouvir as duas partes.", points: 2 }, // Ação autoritária e sem base.
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
  const [category, setCategory] = useState(""); // Novo estado para a categoria

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
      const totalScore = updatedAnswers.reduce((acc, curr) => acc + curr.points, 0);
      setFinalScore(totalScore);

      // Determinando a categoria com base na pontuação
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
          <p>Sua pontuação total: {finalScore}</p>
          <p>Classificação: <strong>{category}</strong></p>
          <p>
            {category === "Líder Everest"
              ? "Parabéns! Você demonstrou competências de liderança extraordinárias."
              : category === "Líder Kilimanjaro"
              ? "Bom trabalho! Você possui uma boa base de liderança, mas pode melhorar."
              : "Nível inicial. Você Precisa desenvolver diversas competências."}
          </p>
          <button onClick={restartAssessment}>Solicitar o relatório completo para conhecer os seus pontos fortes e áreas que necessitas melhorar</button>
        </div>
      )}
    </div>
  );
};

export default AssessmentForm;