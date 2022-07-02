const mongoose = require("mongoose");
const WeightGainSchema = new mongoose.Schema({
  BreakFast: [
    {
      Day: {
        type: String,
        default: "",
      },
      time: {
        type: String,
        default: "",
      },
      description: {
        type: String,
        default: "",
      },
    },
  ],
  Lunch: [
    {
      Day: {
        type: String,
        default: "",
      },
      time: {
        type: String,
        default: "",
      },
      description: {
        type: String,
        default: "",
      },
    },
  ],
  Dinner: [
    {
      Day: {
        type: String,
        default: "",
      },
      time: {
        type: String,
        default: "",
      },
      description: {
        type: String,
        default: "",
      },
    },
  ],
  Exercise: [
    {
      Day: {
        type: String,
        default: "",
      },
      time: {
        type: String,
        default: "",
      },
      description: {
        type: String,
        default: "",
      },
    },
  ],
});

module.exports = mongoose.model("WeightGain", WeightGainSchema);
