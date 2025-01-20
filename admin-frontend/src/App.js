// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardOverview from "./pages/DashboardOverview";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<DashboardOverview />} />
      </Routes>
    </Router>
  );
}

export default App;
