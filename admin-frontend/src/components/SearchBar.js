// src/components/SearchBar.js
import React from "react";
import { Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "../assets/css/SearchBar.css"; // Estilos específicos para a barra de pesquisa

function SearchBar() {
  return (
    <Box
      className="search-bar-container"
      sx={{
        position: "fixed",
        top: 0,
        left: 240, // Espaço reservado para o Sidenav
        right: 0,
        backgroundColor: "#ffffff",
        zIndex: 1200,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <SearchIcon sx={{ color: "#6c757d", marginRight: "10px" }} />
      <InputBase
        placeholder="Pesquisar..."
        sx={{
          flex: 1,
          fontSize: "16px",
          padding: "5px 10px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          color: "#495057",
        }}
      />
    </Box>
  );
}

export default SearchBar;
