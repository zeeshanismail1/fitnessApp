const mongoose = require("mongoose");
const WeightGainSchema = new mongoose.Schema({
  BreakFast: [
    {
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
