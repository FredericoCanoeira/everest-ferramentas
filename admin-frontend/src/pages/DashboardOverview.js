import React from "react";
import { Grid } from "@mui/material";
import SoftBox from "../components/SoftBox";
import { Pie, Line } from "react-chartjs-2";

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
      <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
  <SoftBox>
    <p>Total Users: {totalUsers}</p>
    <p>Reviews: {totalReviews}</p>
    <p>Growth: {growthPercentage}%</p>
    <p>Average Score: {averageScore}</p>
  </SoftBox>
</Grid>

        <Grid item xs={12} md={6}>
          <Pie data={pieData} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Line data={lineData} />
        </Grid>
      </Grid>
    </SoftBox>
  );
}

export default DashboardOverview;
