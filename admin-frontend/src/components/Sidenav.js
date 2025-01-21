import React from "react";
import { Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from "@mui/material";
import { Home, Group, BarChart, Assessment, AttachMoney, Settings } from "@mui/icons-material";
import "../assets/style/Sidenav.css";

function Sidenav() {
  return (
    <Drawer
      variant="permanent"
      classes={{ paper: "sidenav-paper" }}
    >
      <Box className="sidenav-header">
        <h2>Admin Dashboard</h2>
      </Box>

      <List className="sidenav-list">
        {/* Visão Geral */}
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <Home className="sidenav-icon" />
          </ListItemIcon>
          <ListItemText primary="Visão Geral" />
        </ListItem>

        {/* Gerenciamento de Usuários */}
        <ListItem button component={Link} to="/users">
          <ListItemIcon>
            <Group className="sidenav-icon" />
          </ListItemIcon>
          <ListItemText primary="Gerenciamento de Usuários" />
        </ListItem>

        {/* Relatórios e Estatísticas */}
        <ListItem button component={Link} to="/reports">
          <ListItemIcon>
            <BarChart className="sidenav-icon" />
          </ListItemIcon>
          <ListItemText primary="Relatórios e Estatísticas" />
        </ListItem>

        {/* Rankings e Comparações */}
        <ListItem button component={Link} to="/rankings">
          <ListItemIcon>
            <Assessment className="sidenav-icon" />
          </ListItemIcon>
          <ListItemText primary="Rankings e Comparações" />
        </ListItem>

        {/* Controle Financeiro */}
        <ListItem button component={Link} to="/finance">
          <ListItemIcon>
            <AttachMoney className="sidenav-icon" />
          </ListItemIcon>
          <ListItemText primary="Controlo Financeiro" />
        </ListItem>

        {/* Configurações Gerais */}
        <ListItem button component={Link} to="/settings">
          <ListItemIcon>
            <Settings className="sidenav-icon" />
          </ListItemIcon>
          <ListItemText primary="Configurações Gerais" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidenav;

