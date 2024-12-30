const express = require("express");

const Assessment = require("../models/Assessment");

const router = express.Router();

// Submit self-assessment
router.post("/", async (req, res) => {
  const { leadershipSkills, userId, comments } = req.body;

  try {
    // Create a new assessment entry
    const newAssessment = new Assessment({
      userId,
      leadershipSkills,
      comments,
    });

    await newAssessment.save();

    res.status(201).json({
      message: "Self-assessment submitted successfully",
      data: newAssessment,
    });

  } catch (err) {
    res.status(500).json({
      message: "Error submitting self-assessment",
      error: err.message,
    });
  }

});
/*cres.status(201).json({
    message: "Self-assessment submitted",
    data: leadershipSkills,
  });
});*/

// Get all self-assessments
router.get("/", async (req, res) => {
  try {
    const assessments = await Assessment.find();
    res.status(200).json({
      message: "Retrieved all self-assessments",
      data: assessments,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error retrieving self-assessments",
      error: err.message,
    });
  }
});

// Get a specific self-assessment by userId
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const assessments = await Assessment.find({ userId });
    if (!assessments || assessments.length === 0) {
      return res.status(404).json({
        message: "No self-assessments found for this user",
      });
    }
    res.status(200).json({
      message: "Retrieved user's self-assessments",
      data: assessments,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error retrieving user's self-assessments",
      error: err.message,
    });
  }
});

module.exports = router;
