import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px", }}>
      <h1>Auto-avaliação de Liderança</h1>
      <p>Seja bem-vindo!</p>
      <Link to="/assessment">
      {/* <button>Iniciar Autoavaliação</button> */}
      </Link>
    </div>
  );
};

export default Home;
