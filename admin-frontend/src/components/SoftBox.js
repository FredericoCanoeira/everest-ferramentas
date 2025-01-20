import React from "react";
import { Box } from "@mui/material";

function SoftBox({ children, ...props }) {
  return (
    <Box {...props}>
      {children}
    </Box>
  );
}

export default SoftBox;
