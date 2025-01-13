import React from 'react';
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <nav>
          <ul>
            <li>Autoavaliação</li>
            <li>Relatórios</li>
            <li>Plano de Ação</li>
            <li>Biblioteca de Recursos</li>
            <li>Configurações</li>
            <li>Ajuda e Suporte</li>
            <li>Feedback</li>
          </ul>
        </nav>
        <div className="user-profile">
          <img src="../public/user_pic.jpg" alt="User" className="user-avatar" />
          <div className="user-info">
            <p>Rute Carter</p>
            <p>rute@email.com</p>
          </div>
          <button className="more-options">⋯</button>
        </div>
      </aside>
      <main className="main-content">
        <header className="header">
          <h1>Seja um lider Everest</h1>
          
        </header>
        <section className="stats-grid">
        <div className="card positive">
            <h3>Pontuação Geral de Liderança</h3>
            <p></p>
            <span></span>
          </div>
          <div className="card positive">
            <h3>Indicadores de Competências</h3>
            <p></p>
            <span></span>
          </div>
          <div className="card positive">
            <h3>Progresso ao Longo do Tempo</h3>
            <p></p>
            <span></span>
          </div>
          <div className="card positive">
            <h3>Feedbacks Recentes</h3>
            <p></p>
            <span></span>
          </div>
          <div className="card negative">
            <h3>Sugestões de Melhoria</h3>
            <p></p>
            <span></span>
          </div>
          <div className="card neutral">
            <h3>sessoes de Treinamento</h3>
            <p></p>
            <span></span>
          </div>
        </section>
        <section className="charts">
          <div className="chart-card">
            <h3>Sessions</h3>
            <p></p>
            <span></span>
          </div>
          <div className="chart-card">
            <h3>Page Views and Downloads</h3>
            <p></p>
            <span></span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
