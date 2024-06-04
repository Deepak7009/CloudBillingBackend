const express = require("express");
const router = express.Router();
const {
  addFields,
  getData,
  deleteCategory,
  updateFields,
} = require("../controller/categoryController");
const { addBill, getBillData } = require("../controller/billController");

router.post("/category", addFields);
router.get("/getdata", getData);
router.delete("/category/:id", deleteCategory);
router.put("/category/:id", updateFields);
router.get("/getdata", getData);
router.post("/bill", addBill);
router.get("/bills", getBillData);

module.exports = router;
