import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidenav from "./components/Sidenav";
import DashboardOverview from "./pages/DashboardOverview";

function App() {
  return (
    // Configuração do Router com suporte a futuras mudanças do React Router
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Sidenav />
      <Routes>
        <Route path="/" element={<DashboardOverview />} />
      </Routes>
    </Router>
  );
}

export default App;
