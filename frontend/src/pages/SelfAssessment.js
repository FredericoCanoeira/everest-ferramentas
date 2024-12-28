import React, { useState } from "react";

const SelfAssessment = () => {
  const [leadershipSkills, setLeadershipSkills] = useState({
    communication: 0,
    decisionMaking: 0,
    conflictManagement: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeadershipSkills((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/self-assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ leadershipSkills }),
      });
      const data = await response.json();
      console.log(data);
      alert("Autoavaliação enviada com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar autoavaliação:", error);
      alert("Erro ao enviar autoavaliação.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Autoavaliação de Liderança</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Comunicação:
          <input
            type="number"
            name="communication"
            value={leadershipSkills.communication}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        </label>
        <br />
        <label>
          Tomada de Decisão:
          <input
            type="number"
            name="decisionMaking"
            value={leadershipSkills.decisionMaking}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        </label>
        <br />
        <label>
          Gestão de Conflitos:
          <input
            type="number"
            name="conflictManagement"
            value={leadershipSkills.conflictManagement}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default SelfAssessment;
