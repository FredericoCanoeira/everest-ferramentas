import React from "react";
import { Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from "@mui/material";
import { Home, Group, BarChart, Assessment, AttachMoney, Settings } from "@mui/icons-material";
import "../assets/style/Sidenav.css";
import EverestLogo from "../assets/images/logo-dark.png";

function Sidenav() {
  return (
    <Drawer
      variant="permanent"
      className="sidenav-drawer"
      classes={{ paper: "sidenav-paper" }}
    >

            {/* Adicionado o logo da Everest */}
            <Box className="sidenav-header" sx={{ textAlign: "center", padding: "20px 0" }}>
          <img src={EverestLogo} alt="Everest Logo" style={{ maxWidth: "80%" }} />
        </Box>


      <Box className="sidenav-header">
        <h2>Painel de administração</h2>
      </Box>
      <List className="sidenav-list">
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <Home className="sidenav-icon" />
          </ListItemIcon>
          <ListItemText primary="Visão Geral" />
        </ListItem>
        <ListItem button component={Link} to="/users">
          <ListItemIcon>
            <Group className="sidenav-icon" />
          </ListItemIcon>
          <ListItemText primary="Gerenciamento de Usuários" />
        </ListItem>
        <ListItem button component={Link} to="/reports">
          <ListItemIcon>
            <BarChart className="sidenav-icon" />
          </ListItemIcon>
          <ListItemText primary="Relatórios e Estatísticas" />
        </ListItem>
        <ListItem button component={Link} to="/rankings">
          <ListItemIcon>
            <Assessment className="sidenav-icon" />
          </ListItemIcon>
          <ListItemText primary="Rankings e Comparações" />
        </ListItem>
        <ListItem button component={Link} to="/finance">
          <ListItemIcon>
            <AttachMoney className="sidenav-icon" />
          </ListItemIcon>
          <ListItemText primary="Controle Financeiro" />
        </ListItem>
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
