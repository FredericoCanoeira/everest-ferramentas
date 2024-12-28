const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

  // Import Routes
const usersRoutes = require("./routes/users");
const selfAssessmentRoutes = require("./routes/selfAssessment");

// Routes
app.get("/", (req, res) => res.send("Backend is running..."));
app.use("/api/users", usersRoutes);
app.use("/api/self-assessment", selfAssessmentRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
