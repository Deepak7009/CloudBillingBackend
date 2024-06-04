const { Bill } = require("../models/billSchema");
require("dotenv").config();

const addBill = async (req, res) => {
  try {
    const { name, mobile, orderItems } = req.body;

    // Validate and map over orderItems to ensure correct structure
    const formattedOrderItems =
      orderItems?.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price * item.quantity,
      })) || [];

    // Log the formatted order items to debug
    console.log("Formatted Order Items:", formattedOrderItems);

    const newBill = new Bill({
      name,
      mobile,
      orderItems: formattedOrderItems,
    });

    await newBill.save();

    // Log the saved bill to debug
    console.log("Saved Bill:", newBill);

    res.status(201).json({
      message: "Order placed successfully",
      bill: newBill,
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
