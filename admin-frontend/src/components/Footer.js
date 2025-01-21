import React from "react";
import { Box } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        //position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        textAlign: "center",
        padding: "10px",
        backgroundColor: "",
        color: "#7D7D7D",
      }}
    >
      <p>&copy; {new Date().getFullYear()} Everest - consultoria de gestao de carreiras, LDA</p>
    </Box>
  );
}

export default Footer;
