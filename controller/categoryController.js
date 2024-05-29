const { Category } = require("../models/categorySchema");
require("dotenv").config();

const addFields = async (req, res) => {
  try {
    const { productid, name, type, category, unit, stock, description } =
      req.body;

    const existingCategory = await Category.findOne({ productid });
    if (existingCategory) {
      return res.status(400).json({ message: "Product ID already exists" });
    }

    const form = new Category({
      productid,
      name,
      type,
      category,
      unit,
      stock,
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
const getData = async (req, res) => {
  try {
    const data = await Category.find();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await Category.findByIdAndDelete(id);
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const updateFields = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedCategory = await Category.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({
      message: "Category updated successfully",
      contact: updatedCategory,
    });
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { addFields, getData, deleteCategory, updateFields };
