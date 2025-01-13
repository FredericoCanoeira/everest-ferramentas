import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Everest Tools</h1>
      <p>Bem-vindo à ferramenta de autoavaliação de liderança!</p>
      <Link to="/assessment">
        <button>Iniciar Autoavaliação</button>
      </Link>
    </div>
  );
};

export default Home;
