import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Cabeçalho */}
      <header style={styles.header}>
        <h1>Everest Assessment</h1>
        <nav style={styles.nav}>
          <a href="/home" style={styles.link}>Início</a>
          <a href="/Dashboard" style={styles.link}>Dashboard</a>
          <a href="/assessment" style={styles.link}>Realizar o teste</a>
          <a href="/results" style={styles.link}>Ranking</a>
          <a href="/results" style={styles.link}>Resultados</a>
          <a href="/" style={styles.link}>Login</a>
          <a href="/register" style={styles.link}>Registrar</a>
        </nav>
      </header>

      {/* Conteúdo */}
      <main style={styles.main}>{children}</main>

      {/* Rodapé */}
      <footer style={styles.footer}>
        <p>© 2025 Everest Assessment</p>
      </footer>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#f8f9fa',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  nav: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
  },
  main: {
    padding: '20px',
    minHeight: '80vh',
  },
  footer: {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#f8f9fa',
    borderTop: '1px solid #ddd',
  },
};

export default Layout;
