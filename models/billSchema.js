const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  name: String,
  mobile: Number,
  item: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
  // details: {
  //   company: String,
  //   businessType: String,
  //   advertising: String,
  //   budget: String,
  //   message: String,
  // },
});

const Bill = mongoose.model("BillField", billSchema);

module.exports = { Bill };
