const { Structure } = require("../models/structureSchema");
require("dotenv").config();

const addStructureFields = async (req, res) => {
  try {
    const { number, title, charge } =
      req.body;

    const form = new Structure({
      number,
      title,
      charge,
    });

    await form.save();

    res.status(201).json({
      message: "Structure added successfully",
      contact: form,
    });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const getStructureData = async (req, res) => {
  try {
    const data = await Structure.find();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const deleteStructure = async (req, res) => {
  try {
    const { id } = req.params;
    await Structure.findByIdAndDelete(id);
    res.status(200).json({ message: "Structure deleted successfully" });
  } catch (error) {
    console.error("Error deleting structure:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const updateStructure = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedCategory = await Structure.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedCategory) {
      return res.status(404).json({ message: "Structure not found" });
    }

    res.status(200).json({
      message: "Structure updated successfully",
      contact: updatedCategory,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { addStructureFields, getStructureData, deleteStructure, updateStructure };
