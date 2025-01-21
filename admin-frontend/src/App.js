import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidenav from "./components/Sidenav";
import DashboardOverview from "./pages/DashboardOverview";
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import Rankings from "./pages/Rankings";
import Finance from "./pages/Finance";
import Settings from "./pages/Settings";
import "./assets/style/Layout.css";
import Footer from "./components/Footer";
//import SearchBar from "./components/SearchBar";

function App() {
  return (
    // Configuração do Router com suporte a futuras mudanças do React Router
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="app-container">
      <Sidenav />
      <main className="main-content">
      <Routes>
        <Route path="/" element={<DashboardOverview />} />
        <Route path="/users" element={<Users />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/rankings" element={<Rankings />} />
      <Route path="/finance" element={<Finance />} />
      <Route path="/settings" element={<Settings />} />
      </Routes>
      
      {/* Footer fixo no final da página */}
      <Footer />

      </main>
      </div>
    </Router>
  );
}

export default App;
