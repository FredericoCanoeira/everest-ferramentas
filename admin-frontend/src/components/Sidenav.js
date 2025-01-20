import React from "react";
import { List, ListItem, ListItemText, Box } from "@mui/material";

function Sidenav() {
  return (
    <Box sx={{ width: 250, bgcolor: "background.paper" }}>
      <List>
        <ListItem button>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidenav;
