// src/pages/Settings.js
import React from "react";
import { Typography, Box } from "@mui/material";

function Settings() {
  return (
    <Box p={3}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Configurações Gerais
      </Typography>
      <Typography variant="body1">
        Página para configurar preferências e personalizar o sistema.
      </Typography>
    </Box>
  );
}

export default Settings;
