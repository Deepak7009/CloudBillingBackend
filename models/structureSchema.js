const mongoose = require("mongoose");

const structureSchema = new mongoose.Schema({
  title: String,
  number: Number,
  charge: Number,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Structure = mongoose.model("structure", structureSchema);

module.exports = { Structure };
