// src/pages/Users.js
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  MenuItem,
  Grid,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import EditIcon from "@mui/icons-material/Edit";
import "../assets/style/Users.css";


function Users() {
  const [search, setSearch] = useState({ name: "", email: "", rating: "" });
  const [filters, setFilters] = useState({ date: "", category: "" });

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
      categoria: "Líder Moco",
      relatorio: "Relatório-123.pdf",
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
      categoria: "Everest",
      relatorio: "Relatório-456.pdf",
    },
  ];

  // Lógica para filtrar e pesquisar os usuários
  const filteredUsers = users.filter((user) => {
    const matchesName = user.nome.toLowerCase().includes(search.name.toLowerCase());
    const matchesEmail = user.email.toLowerCase().includes(search.email.toLowerCase());
    const matchesRating = search.rating ? user.pontuacao.toString() === search.rating : true;
    const matchesDate = filters.date ? user.dataRegistro === filters.date : true;
    const matchesCategory = filters.category ? user.categoria === filters.category : true;

    return matchesName && matchesEmail && matchesRating && matchesDate && matchesCategory;
  });

  return (
    <Box p={3}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Gestão de Usuários
      </Typography>

      {/* Barra de Pesquisa e Filtros */}
      <Card sx={{ marginBottom: "20px", padding: "20px" }}>
        <Grid container spacing={2}>
          {/* Pesquisas */}
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Nome do Usuário"
              value={search.name}
              onChange={(e) => setSearch({ ...search, name: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="E-mail"
              value={search.email}
              onChange={(e) => setSearch({ ...search, email: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Classificação"
              value={search.rating}
              onChange={(e) => setSearch({ ...search, rating: e.target.value })}
            />
          </Grid>

          {/* Filtros */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Data de Registro"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={filters.date}
              onChange={(e) => setFilters({ ...filters, date: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Categoria de Líder"
              select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            >
              <MenuItem value="">Todas</MenuItem>
              
              <MenuItem value="Everest">Everest</MenuItem>
              <MenuItem value="Kilimanjaro">Kilimanjaro</MenuItem>
              <MenuItem value="Líder Moco">Líder Moco</MenuItem>
            </TextField>
          </Grid>
        </Grid>

        {/* Botão de Limpar Filtros */}
        <Box textAlign="right" mt={2}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              setSearch({ name: "", email: "", rating: "" });
              setFilters({ date: "", category: "" });
            }}
          >
            Limpar Filtros
          </Button>
        </Box>
      </Card>

      {/* Tabela de Usuários */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Lista de Usuários
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>BI</TableCell>
                <TableCell>E-mail</TableCell>
                <TableCell>Telefone</TableCell>
                <TableCell>Data de Registro</TableCell>
                <TableCell>Última Avaliação</TableCell>
                <TableCell>Pontuação</TableCell>
                <TableCell>Categoria</TableCell>
                <TableCell>Relatório</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.nome}</TableCell>
                  <TableCell>{user.bi}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.telefone}</TableCell>
                  <TableCell>{user.dataRegistro}</TableCell>
                  <TableCell>{user.ultimaAvaliacao}</TableCell>
                  <TableCell>{user.pontuacao}</TableCell>
                  <TableCell>{user.categoria}</TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      onClick={() => console.log(`Editar relatório de ${user.nome}`)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="success"
                      onClick={() => console.log(`Baixar ${user.relatorio}`)}
                    >
                      <DownloadIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Users;
