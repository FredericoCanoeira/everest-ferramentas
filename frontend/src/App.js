import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/styles/App.css"
import PrivateRoute from './components/common/PrivateRoute'

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
import Obrigado from "./pages/Obrigado"



// Layout
import Layout from "./components/common/Layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" 
          element={
            <Layout>
            <Home />
            </Layout>
            } 
            />
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
            //<Layout>
              <AssessmentForm />
            //</Layout>
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
          path="/obrigado" 
          element={
          <Obrigado />
          }
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute adminOnly={true}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        {/* Página 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
