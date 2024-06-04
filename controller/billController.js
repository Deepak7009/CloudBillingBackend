const { Bill } = require("../models/billSchema");
require("dotenv").config();

const addBill = async (req, res) => {
  try {
    const { name, mobile, orderItems } = req.body;

    const form = new Bill({
      name,
      mobile,
      orderItems,
    });

    await form.save();

    res.status(201).json({
      message: "Order placed successfully",
      bill: form,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getBillData = async (req, res) => {
  try {
    const data = await Bill.find();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports = { addBill, getBillData };
