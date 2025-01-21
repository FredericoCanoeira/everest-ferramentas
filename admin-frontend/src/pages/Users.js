// src/pages/Users.js
import React from "react";
import { Card, CardContent, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

function Users() {
  const users = [
    {
      id: 1,
      nome: "João Silva",
      bi: "123456789LA123",
      email: "joao@email.com",
      telefone: "+244 923 456 789",
      dataRegistro: "2025-01-01",
      ultimaAvaliacao: "2025-01-10",
      pontuacao: 85,
    },
    {
      id: 2,
      nome: "Maria Santos",
      bi: "987654321LB456",
      email: "maria@email.com",
      telefone: "+244 923 987 654",
      dataRegistro: "2024-12-15",
      ultimaAvaliacao: "2025-01-08",
      pontuacao: 92,
    },
  ];

  return (
    <Card sx={{ margin: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "12px" }}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Tabela de Usuários
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>BI</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>Número de Telefone</TableCell>
              <TableCell>Data de Registro</TableCell>
              <TableCell>Última Avaliação</TableCell>
              <TableCell>Pontuação</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.nome}</TableCell>
                <TableCell>{user.bi}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.telefone}</TableCell>
                <TableCell>{user.dataRegistro}</TableCell>
                <TableCell>{user.ultimaAvaliacao}</TableCell>
                <TableCell>{user.pontuacao}</TableCell>
                <TableCell>
                  <IconButton color="primary" title="Visualizar">
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton color="secondary" title="Editar">
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" title="Excluir">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default Users;

