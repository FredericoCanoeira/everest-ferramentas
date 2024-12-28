import React, { useEffect, useState } from "react";

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/self-assessment");
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error("Erro ao buscar resultados:", error);
      }
    };

    fetchResults();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Resultados de Autoavaliação</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            Comunicação: {result.communication}, Tomada de Decisão: {result.decisionMaking}, 
            Gestão de Conflitos: {result.conflictManagement}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
