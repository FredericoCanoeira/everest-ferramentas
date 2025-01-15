import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/styles/App.css"

// Componentes
import Login from "./components/Login";
import Register from "./components/Register";
import Form from "./components/Form";
import AssessmentForm from "./components/assessment/AssessmentForm";


// Páginas
import Home from "./pages/Home";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import PaymentInformation from "./pages/PaymentInformation";
import Solicitacao from "./pages/Solicitacao";


// Layout
import Layout from "./components/common/Layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<Home />} />
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
          path="/Login"
          element={
            <Layout>
              <Login />
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
        <Route
          path="/PaymentInformation"
          element={
            <Layout>
            <PaymentInformation />
            </Layout>
          } 
        />
        <Route
          path="/Solicitacao"
          element={
            <Layout>
            <Solicitacao />
            </Layout>
          } 
        />
        <Route
          path="/Dashboard"
          element={
            <Layout>
              <Dashboard />
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
