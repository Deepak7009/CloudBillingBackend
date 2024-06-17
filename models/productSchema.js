const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productid: String,
  userId: { type: String, required: true },
  productName: String,
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
});

const Product = mongoose.model("productField", productSchema);

module.exports = { Product };
