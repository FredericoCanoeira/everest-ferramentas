import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Auto-avaliação de Liderança</h1>
      <p>Seja bem-vindo!</p>
      <Link to="/assessment" >
      {/* <button>Iniciar Autoavaliação</button> */}
      </Link>
    </div>
  );
};

export default Home;
