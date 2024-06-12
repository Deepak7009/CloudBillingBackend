const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  productName: String,
  quantity: Number,
  price: Number,
});

const billSchema = new mongoose.Schema({
  name: String,
  mobile: Number,
  section: String,
  index:Number,
  orderItems: [orderItemSchema],
  totalAmount: Number,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Bill = mongoose.model("BillField", billSchema);

module.exports = { Bill };
