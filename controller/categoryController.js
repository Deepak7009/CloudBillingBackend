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
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };


  const getItems = async (req, res) => {

    const { category } = req.query;
    try {
      let products;
      if (category) {
        products = await Category.find({ category });
      } else {
        products = await Category.find();
      }
      res.status(200).json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  const getCategories = async (req, res) => {
    try {
      const categories = await Category.find({}, 'category');
      res.status(200).json(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  module.exports = { getCategoryData, addCategory, getCategories, getItems };
