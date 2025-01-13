import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <nav>
          <ul>
            <li>Home</li>
            <li>Analytics</li>
            <li>Clients</li>
            <li>Tasks</li>
            <li>Settings</li>
            <li>About</li>
            <li>Feedback</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          <h1>Overview</h1>
          <input type="date" />
        </header>
        <section className="stats-grid">
          <div className="card positive">
            <h3>Users</h3>
            <p>14k</p>
            <span>+25%</span>
          </div>
          <div className="card negative">
            <h3>Conversions</h3>
            <p>325</p>
            <span>-25%</span>
          </div>
          <div className="card neutral">
            <h3>Event Count</h3>
            <p>200k</p>
            <span>+5%</span>
          </div>
        </section>
        <section className="charts">
          <div className="chart-card">
            <h3>Sessions</h3>
            <p>13,277</p>
            <span>+35%</span>
          </div>
          <div className="chart-card">
            <h3>Page Views and Downloads</h3>
            <p>1.3M</p>
            <span>-8%</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
