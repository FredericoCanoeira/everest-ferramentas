const express = require("express");
const router = express.Router();

// Submit self-assessment
router.post("/", (req, res) => {
  const { leadershipSkills } = req.body;
  res.status(201).json({
    message: "Self-assessment submitted",
    data: leadershipSkills,
  });
});

// Get all self-assessments
router.get("/", (req, res) => {
  res.status(200).json({ message: "Get all self-assessments" });
});

module.exports = router;
