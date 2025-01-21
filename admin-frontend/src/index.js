import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App"; // Importação do App principal

const root = ReactDOM.createRoot(document.getElementById("root")); // Ponto de entrada
root.render(
  <React.StrictMode>
    <CssBaseline /> {/* Estilos globais do Material-UI */}
    <App />
  </React.StrictMode>
);

