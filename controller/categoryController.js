const { Category } = require("../models/categorySchema");
require("dotenv").config();

const addFields = async (req, res) => {
  try {
    const { productid, name, type, category, unit, stock,description } = req.body;

    const form = new Category({
      productid,
      name,
      type,
      category,
      unit,
      stock,
      description,
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
const getData = async (req, res) => {
  try {
    const data = await Category.find();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { addFields, getData };
