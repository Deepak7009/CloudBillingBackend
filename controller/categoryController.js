const { Category } = require("../models/categorySchema");
require("dotenv").config();

const addCategory = async (req, res) => {
    try {
      const {  category, price,  description } =
        req.body;
   
      const form = new Category({
        category,
        price,
        description,
      });
  
      await form.save();
  
      res.status(201).json({
        message: "Category added successfully",
        contact: form,
      });
    } catch (error) {
      console.error("Error adding category:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

const getCategoryData = async (req, res) => {
    try {
      const category = await Category.find();
      res.status(200).json(category);
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  module.exports = { getCategoryData,addCategory };
