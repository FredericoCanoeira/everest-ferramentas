// src/pages/Finance.js
import React from "react";
import { Typography, Box } from "@mui/material";

function Finance() {
  return (
    <Box p={3}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Controle Financeiro
      </Typography>
      <Typography variant="body1">
        Página para gerenciar receitas, despesas e relatórios financeiros.
      </Typography>
    </Box>
  );
}

export default Finance;
