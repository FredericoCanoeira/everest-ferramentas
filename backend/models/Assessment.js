const mongoose = require("mongoose");

const AssessmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  leadershipSkills: { type: Array, required: true },
  comments: { type: String, default: "" },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Assessment", AssessmentSchema);
