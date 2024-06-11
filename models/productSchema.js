const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productid: String,
  userId: { type: String, required: true },
  name: String,
  type: String,
  category: String,
  unit: String,
  stock: String,
  price: String,
  description: String,
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

const Product = mongoose.model("productField", productSchema);

module.exports = { Product };
