/*import React from "react";
import "./Question.css";

const Question = ({ question, options, onAnswer }) => {
  return (
    <div className="question-container">
      <p>{question}</p>
      <div className="options-grid">
        {options.map((option, index) => (
          <button
            key={index}
            className="option-button"
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;*/

import React from "react";
import "./Question.css";

const Question = ({ question, options, onAnswer }) => {
  return (
    <div className="question">
      <h4>{question}</h4>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            {/* Exibir apenas o texto da opção */}
            <button onClick={() => onAnswer(option)}>{option.text}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
