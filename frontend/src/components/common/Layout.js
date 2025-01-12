import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Cabeçalho */}
      <header style={styles.header}>
        <h1>Minha Aplicação</h1>
        <nav style={styles.nav}>
          <a href="/" style={styles.link}>Login</a>
          <a href="/register" style={styles.link}>Registrar</a>
          <a href="/form" style={styles.link}>Formulário</a>
          <a href="/results" style={styles.link}>Resultados</a>
          <a href="/home" style={styles.link}>Início</a>
          <a href="/self-assessment" style={styles.link}>Autoavaliação</a>
          <a href="/assessment" style={styles.link}>Avaliação</a>
        </nav>
      </header>

      {/* Conteúdo */}
      <main style={styles.main}>{children}</main>

      {/* Rodapé */}
      <footer style={styles.footer}>
        <p>© 2025 Minha Aplicação</p>
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
