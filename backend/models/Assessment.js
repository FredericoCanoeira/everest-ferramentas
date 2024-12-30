const mongoose = require("mongoose");

const AssessmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  responses: { type: Array, required: true },
  score: { type: Number, required: true },
  classification: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Assessment", AssessmentSchema);
