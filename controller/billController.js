const { Bill } = require("../models/billSchema");
require("dotenv").config();

const addBill = async (req, res) => {
  try {
    const { name, mobile,item } =
      req.body;

    const form = new Bill({
      name,
      mobile,
      item,
      // details: {
      //   company,
      //   businessType,
      //   advertising,
      //   budget,
      //   message,
      // },
    });

    await form.save();

    res.status(201).json({
      message: "Category added successfully",
      contact: form,
    });
  } catch (error) {
    console.error("Error adding category :", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// const getData = async (req, res) => {
//   try {
//     const data = await Category.find();
//     res.status(200).json(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

module.exports = { addBill  };
