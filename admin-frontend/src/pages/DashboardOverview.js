// src/pages/DashboardOverview.js
import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import SoftBox from "../components/SoftBox";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

// Registro dos elementos do Chart.js
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

function DashboardOverview() {
  const totalUsers = 1500;
  const totalReviews = 300;
  const growthPercentage = 25;
  const averageScore = 4.3;

  const pieData = {
    labels: ["Líder Moco", "Kilimanjaro", "Everest"],
    datasets: [
      {
        data: [500, 700, 300],
        backgroundColor: ["#3A416F", "#17C1E8", "#CB0C9F"],
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Avaliações",
        data: [20, 40, 80, 100, 200, 300],
        backgroundColor: "rgba(23, 193, 232, 0.2)",
        borderColor: "#17C1E8",
      },
    ],
  };

  return (
    <SoftBox p={2}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Dashboard Overview
      </Typography>

      <Grid container spacing={3}>
        {/* Cartões de Métricas */}
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Total usuários
              </Typography>
              <Typography variant="h4" color="primary" fontWeight="bold">
                {totalUsers}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
              Quantidade de avaliações
              </Typography>
              <Typography variant="h4" color="success" fontWeight="bold">
                {totalReviews}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
              Crescimento do app (%)
              </Typography>
              <Typography variant="h4" color="warning" fontWeight="bold">
                {growthPercentage}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
              Pontuação média global
              </Typography>
              <Typography variant="h4" color="error" fontWeight="bold">
                {averageScore}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Gráfico de Pizza */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Percentagem de lideres em cada categoria
              </Typography>
              <Pie data={pieData} />
            </CardContent>
          </Card>
        </Grid>

        {/* Gráfico de Linha */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Avaliações ao longo do tempo
              </Typography>
              <Line data={lineData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </SoftBox>
  );
}

export default DashboardOverview;
