const { Product } = require("../models/productSchema");
require("dotenv").config();

const addProduct = async (req, res) => {
  try {
    const { productid, name, type, category, unit, stock, description } =
      req.body;

    const existingProductid = await Product.findOne({ productid });
    if (existingProductid) {
      return res.status(400).json({ message: "Product ID already exists" });
    }

    const form = new Product({
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
      message: "Product added successfully",
      contact: form,
    });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


const getProducts = async (req, res) => {
  try {
    const data = await Product.find();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedCategory = await Product.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedCategory) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product updated successfully",
      contact: updatedCategory,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { addProduct, getProducts, deleteProduct, updateProduct };
