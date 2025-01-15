import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Solicitacao.css';

const Solicitacao = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    bi: '',
    email: ''
  });
  const [uniqueId, setUniqueId] = useState('');
  const navigate = useNavigate();

  // Função para lidar com a mudança nos campos do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para enviar os dados e gerar um ID único
  const handleSubmit = (e) => {
    e.preventDefault();

    // Gerando um ID único com base no nome e BI
    const generatedId = `${formData.nome.replace(/\s+/g, '').toLowerCase()}-${formData.bi.toLowerCase()}`;
    setUniqueId(generatedId);

    // Aqui você pode enviar os dados para um backend ou simplesmente mostrar o ID gerado
    console.log('Dados enviados:', formData);
    console.log('ID gerado:', generatedId);

    // Depois de enviar, redireciona para outra página, 
    navigate('/');
  };

  return (
    <div className="solicitacao-form-container">
      <h2>Formulário de Solicitação</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome Completo:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefone">Número de Telemóvel:</label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleInputChange}
            pattern="(\+?[0-9]{1,4}[ .-]?)?([0-9]{1,3}[ .-]?)?([0-9]{4}[ .-]?[0-9]{4})"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="bi">BI:</label>
          <input
            type="text"
            id="bi"
            name="bi"
            value={formData.bi}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">Enviar Informações</button>
      </form>

      {uniqueId && (
        <div className="generated-id">
          <p><strong>ID Gerado:</strong> {uniqueId}</p>
        </div>
      )}
    </div>
  );
};

export default Solicitacao;
