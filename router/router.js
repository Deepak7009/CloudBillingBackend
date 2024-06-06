const express = require("express");
const router = express.Router();
const { addFields, getData, deleteCategory, updateFields }
  = require("../controller/productController");
const { addExpens, getExpens, updateExpens, deleteExpens }
  = require("../controller/expensisesController");
const { addBill, getBillData } = require("../controller/billController");
const { getCategoryData, addCategory } = require("../controller/categoryController");

router.post("/category", addFields);
router.get("/getdata", getData);
router.delete("/category/:id", deleteCategory);
router.put("/category/:id", updateFields);
router.get("/getdata", getData);
router.post("/bill", addBill);
router.get("/bills", getBillData);
router.get("/getCategoryData", getCategoryData);
router.post("/addcategory", addCategory);

router.post("/expenses", addExpens);
router.get("/expenses", getExpens);
router.put("/expens/:id", updateExpens);
router.delete("/expens/:id", deleteExpens);

module.exports = router;
