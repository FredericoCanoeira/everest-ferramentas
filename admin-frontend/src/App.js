import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidenav from "./components/Sidenav";
import DashboardOverview from "./pages/DashboardOverview";
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
      </Routes>
      {/* Footer fixo no final da página */}
      <Footer />

      </main>
      </div>
    </Router>
  );
}

export default App;
