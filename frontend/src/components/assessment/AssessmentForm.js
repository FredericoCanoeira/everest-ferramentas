import React, { useState } from "react";
import "./AssessmentForm.css";
import Question from "../common/Question";

const questions = [
  {
    id: 1,
    text: "Sua equipe está atrasada na entrega de um projeto importante. O que você faz?",
    options: ["Reúno a equipe para identificar os obstáculos e ajustar o cronograma.",
        "Trabalho mais horas para compensar o atraso sozinho.", 
        "Pressiono a equipe para acelerar a entrega, mesmo com possível perda de qualidade.", 
        "Informo o cliente sobre o atraso e não faço ajustes no planejamento."],
  },
  {
    id: 2,
    text: "Você precisa escolher entre duas propostas: uma mais barata com riscos moderados e outra mais cara com baixo risco. Qual decisão toma?",
    options: ["Opto pela mais cara para evitar riscos.",
        "Analiso os riscos de ambas, consulto a equipe e escolho a mais estratégica.", 
        "Escolho a proposta mais barata para economizar custos.",
        "Adio a decisão para ganhar mais tempo."],
  },
  {
    id: 3,
    text: "Um cliente importante pede uma solução fora do escopo do projeto. Como você reage?",
    options: ["Avalio o impacto e custo da solicitação antes de responder.",
        "Aceito a solicitação sem avaliar para agradar o cliente.",
        "Recuso imediatamente para manter o foco no escopo.",
        "Digo que vou verificar, mas não tomo nenhuma atitude."],
  },

  {
    id: 3,
    text: "Como você lida com conflitos dentro da equipe?",
    options: ["Excelente", "Bom", "Regular", "Fraco"],
  },

  {
    id: 3,
    text: "Um problema inesperado interrompe um processo crucial. O que você faz primeiro?",
    options: ["Analiso rapidamente a causa do problema e tomo uma decisão para solucioná-lo.",
        "Espero que a situação se resolva sozinha.",
        "Informo a liderança e aguardo instruções.",
        "Tomo uma decisão imediata sem avaliar as consequências"],
  },

  {
    id: 3,
    text: "Dois membros da equipe estão em conflito, prejudicando o andamento do projeto. Como você age?",
    options: [ "Chamo ambos para conversar e encontrar uma solução conjunta.",
      "Ignoro o conflito para não me envolver.",
      "Escolho o lado de quem considero mais competente.",
      "Afasto um dos membros da equipe sem ouvir as duas partes."],
  },
];

const AssessmentForm = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answer;
    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("Obrigado por completar a autoavaliação!");
      console.log("Respostas:", updatedAnswers);
    }
  };

  return (
    <div className="assessment-form">
      <h2>Tomada de Decisão</h2>
      <Question
        question={questions[currentQuestion].text}
        options={questions[currentQuestion].options}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default AssessmentForm;
