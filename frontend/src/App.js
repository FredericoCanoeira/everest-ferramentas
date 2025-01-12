import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes
import Login from "./components/Login";
import Register from "./components/Register";
import Form from "./components/Form";
import AssessmentForm from './components/assessment/AssessmentForm';

// Páginas
import Home from "./pages/Home";
import Results from "./pages/Results";
import SelfAssessment from "./pages/SelfAssessment";
import NotFound from "./pages/NotFound";

// Layout
import Layout from "./components/common/Layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rotas protegidas (com layout) */}
        <Route
          path="/form"
          element={
            <Layout>
              <Form />
            </Layout>
          }
        />
        <Route
          path="/results"
          element={
            <Layout>
              <Results />
            </Layout>
          }
        />
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/self-assessment"
          element={
            <Layout>
              <SelfAssessment />
            </Layout>
          }
        />
        <Route
          path="/assessment"
          element={
            <Layout>
              <AssessmentForm />
            </Layout>
          }
        />

        {/* Página 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
