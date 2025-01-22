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

// Registrar elementos do Chart.js
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
        Visao geral
      </Typography>
      <Grid container spacing={3}>
        {/* Total de Usuários */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
              height: "150px", // Ajuste consistente para altura
            }}
          >
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Total de Usuários
              </Typography>
              <Typography
                variant="h4"
                color="primary"
                fontWeight="bold"
                sx={{ marginTop: "16px" }}
              >
                {totalUsers}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Avaliações */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
              height: "150px",
            }}
          >
            <CardContent>
              <Typography variant="h6" color="textSecondary">
              Avaliações
              </Typography>
              <Typography
                variant="h4"
                color="success"
                fontWeight="bold"
                sx={{ marginTop: "16px" }}
              >
                {totalReviews}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Crescimento */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
              height: "150px",
            }}
          >
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Crescimento do App (%)
              </Typography>
              <Typography
                variant="h4"
                color="warning"
                fontWeight="bold"
                sx={{ marginTop: "16px" }}
              >
                {growthPercentage}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Pontuação Média */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
              height: "150px",
            }}
          >
            <CardContent>
              <Typography variant="h6" color="textSecondary">
              Score médio global
              </Typography>
              <Typography
                variant="h4"
                color="error"

                //fontWeight="bold"
                sx={{ marginTop: "2px" }}
              >
                {averageScore}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Gráficos */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
            }}
          >
            <CardContent>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Categoria de lideres
              </Typography>
              <Pie data={pieData} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
            }}
          >
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
