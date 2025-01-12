import React, { useState } from 'react';
import './AssessmentForm.css';

const questions = [
  {
    id: 1,
    text: 'Como você se avalia na capacidade de comunicação com sua equipe?',
    options: ['Excelente', 'Bom', 'Regular', 'Fraco']
  },
  {
    id: 2,
    text: 'Como você gerencia o tempo e delega tarefas?',
    options: ['Excelente', 'Bom', 'Regular', 'Fraco']
  },
  {
    id: 3,
    text: 'Como você lida com conflitos dentro da equipe?',
    options: ['Excelente', 'Bom', 'Regular', 'Fraco']
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
      alert('Obrigado por completar a autoavaliação!');
      console.log('Respostas:', updatedAnswers);
    }
  };

  return (
    <div className="assessment-form">
      <h2>Autoavaliação de Liderança</h2>
      <p>{questions[currentQuestion].text}</p>
      <div className="options">
        {questions[currentQuestion].options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AssessmentForm;
