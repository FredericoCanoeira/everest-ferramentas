import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Form from "./components/Form";
import Results from "./pages/Results";
import Home from "./pages/Home";
import SelfAssessment from "./pages/SelfAssessment";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas existentes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/form" element={<Form />} />
        <Route path="/results" element={<Results />} />
        {/* Novas rotas */}
        <Route path="/home" element={<Home />} />
        <Route path="/self-assessment" element={<SelfAssessment />} />
      </Routes>
    </Router>
  );
}

export default App;
