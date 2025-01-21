import React from "react";
import { Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Button } from "@mui/material";
import { Home, Group, BarChart, Assessment, AttachMoney, Settings, Person, Notifications, ExitToApp } from "@mui/icons-material";
import "../assets/style/Sidenav.css";
import EverestLogo from "../assets/images/logo-dark.png";

function Sidenav() {
  return (
    <Drawer
      variant="permanent"
      className="sidenav-drawer"
      sx={{ backgroundColor: "#EEEFF0" }}
      classes={{ paper: "sidenav-paper" }}
    >
      {/* Logo da Everest */}
      <Box className="sidenav-header" sx={{ textAlign: "center", padding: "20px 0" }}>
        <img src={EverestLogo} alt="Everest Logo" style={{ maxWidth: "80%" }} />
      </Box>

      {/* Cabeçalho */}
      <Box className="sidenav-header">
        <h2>Painel de administração</h2>
      </Box>

      <List className="sidenav-list">
        {/* Links de Navegação */}
        <ListItem button={true} component={Link} to="/">
          <ListItemIcon>
            <Home className="sidenav-icon" />
          </ListItemIcon>
          <ListItemText primary="Visão Geral" />
        </ListItem>

        <ListItem button={true} component={Link} to="/users">
          <ListItemIcon>
            <Group className="sidenav-icon" />
          </ListItemIcon>
          <ListItemText primary="Gestão de Usuários" />
        </ListItem>

        <ListItem button={true} component={Link} to="/reports">
          <ListItemIcon>
            <BarChart className="sidenav-icon" />
          </ListItemIcon>
          <ListItemText primary="Relatórios e Estatísticas" />
        </ListItem>

        <ListItem button={true} component={Link} to="/rankings">
          <ListItemIcon>
            <Assessment className="sidenav-icon" />
          </ListItemIcon>
          <ListItemText primary="Rankings e Comparações" />
        </ListItem>

        <ListItem button={true} component={Link} to="/finance">
          <ListItemIcon>
            <AttachMoney className="sidenav-icon" />
          </ListItemIcon>
          <ListItemText primary="Controle Financeiro" />
        </ListItem>

        <ListItem button={true} component={Link} to="/settings">
          <ListItemIcon>
            <Settings className="sidenav-icon" />
          </ListItemIcon>
          <ListItemText primary="Configurações" />
        </ListItem>

        {/* Links Adicionais */}
        <ListItem button={true} component={Link} to="/profile">
          <ListItemIcon>
            <Person className="sidenav-icon" />
          </ListItemIcon>
          <ListItemText primary="Perfil" />
        </ListItem>

        <ListItem button={true} component={Link} to="/notifications">
          <ListItemIcon>
            <Notifications className="sidenav-icon" />
          </ListItemIcon>
          <ListItemText primary="Notificações" />
        </ListItem>
      </List>

      {/* Botão de Sair */}
      <Box sx={{ textAlign: "center", marginTop: "auto", padding: "20px" }}>
        <Button
          variant="contained"
          color="error"
          startIcon={<ExitToApp />}
          onClick={() => console.log("Sair do Dashboard")}
        >
          Sair
        </Button>
      </Box>
    </Drawer>
  );
}

export default Sidenav;
