const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  productid: String,
  name: String,
  type: String,
  category: String,
  unit: String,
  stock: String,
  description: String,

  // details: {
  //   company: String,
  //   businessType: String,
  //   advertising: String,
  //   budget: String,
  //   message: String,
  // },
});

const Category = mongoose.model('CategoryField', categorySchema);

module.exports = { Category };
