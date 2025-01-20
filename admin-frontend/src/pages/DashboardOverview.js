import React from "react";
import { Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { Pie, Line } from "react-chartjs-2";

function DashboardOverview() {
  // Dados fictícios para exibição inicial
  const totalUsers = 1500;
  const totalReviews = 300;
  const growthPercentage = 25;
  const averageScore = 4.3;

  // Dados para o gráfico de pizza
  const pieData = {
    labels: ["Líder Moco", "Kilimanjaro", "Everest"],
    datasets: [
      {
        data: [500, 700, 300],
        backgroundColor: ["#3A416F", "#17C1E8", "#CB0C9F"],
        hoverBackgroundColor: ["#4A4D73", "#29D0F2", "#D61FB6"],
      },
    ],
  };

  // Dados para o gráfico de linha
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Avaliações",
        data: [20, 40, 80, 100, 200, 300],
        fill: true,
        backgroundColor: "rgba(23, 193, 232, 0.2)",
        borderColor: "#17C1E8",
      },
    ],
  };

  return (
    <SoftBox p={2}>
      <SoftTypography variant="h4" fontWeight="bold" color="textPrimary" gutterBottom>
        Visão Geral
      </SoftTypography>

      <Grid container spacing={3}>
        {/* Painel Resumido */}
        <Grid item xs={12} md={3}>
          <SoftBox p={2} bgColor="white" borderRadius="lg" shadow="md">
            <SoftTypography variant="h6" fontWeight="bold" color="textSecondary">
              Total de Usuários
            </SoftTypography>
            <SoftTypography variant="h3" fontWeight="bold" color="primary">
              {totalUsers}
            </SoftTypography>
          </SoftBox>
        </Grid>

        <Grid item xs={12} md={3}>
          <SoftBox p={2} bgColor="white" borderRadius="lg" shadow="md">
            <SoftTypography variant="h6" fontWeight="bold" color="textSecondary">
              Avaliações Realizadas
            </SoftTypography>
            <SoftTypography variant="h3" fontWeight="bold" color="success">
              {totalReviews}
            </SoftTypography>
          </SoftBox>
        </Grid>

        <Grid item xs={12} md={3}>
          <SoftBox p={2} bgColor="white" borderRadius="lg" shadow="md">
            <SoftTypography variant="h6" fontWeight="bold" color="textSecondary">
              Crescimento (%)
            </SoftTypography>
            <SoftTypography variant="h3" fontWeight="bold" color="warning">
              {growthPercentage}%
            </SoftTypography>
          </SoftBox>
        </Grid>

        <Grid item xs={12} md={3}>
          <SoftBox p={2} bgColor="white" borderRadius="lg" shadow="md">
            <SoftTypography variant="h6" fontWeight="bold" color="textSecondary">
              Pontuação Média
            </SoftTypography>
            <SoftTypography variant="h3" fontWeight="bold" color="error">
              {averageScore}
            </SoftTypography>
          </SoftBox>
        </Grid>

        {/* Gráfico de Pizza */}
        <Grid item xs={12} md={6}>
          <SoftBox p={2} bgColor="white" borderRadius="lg" shadow="md">
            <SoftTypography variant="h6" fontWeight="bold" color="textSecondary">
              Distribuição por Categoria
            </SoftTypography>
            <Pie data={pieData} />
          </SoftBox>
        </Grid>

        {/* Gráfico de Linha */}
        <Grid item xs={12} md={6}>
          <SoftBox p={2} bgColor="white" borderRadius="lg" shadow="md">
            <SoftTypography variant="h6" fontWeight="bold" color="textSecondary">
              Avaliações ao longo do tempo
            </SoftTypography>
            <Line data={lineData} />
          </SoftBox>
        </Grid>
      </Grid>
    </SoftBox>
  );
}

export default DashboardOverview;
