import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

const PrivateRoute = ({ children, adminOnly = false }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Redirecionar para login se o usuário não estiver autenticado
    return <Navigate to="/login" />;
  }

  if (adminOnly && !user.isAdmin) {
    // Redirecionar para página de "Acesso Negado" se não for admin
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default PrivateRoute;
