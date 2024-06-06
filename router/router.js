const express = require("express");
const router = express.Router();
const {
  addFields,
  getData,
  deleteCategory,
  updateFields,
  getCategory,
  getProducts,
} = require("../controller/productController");
const { addBill, getBillData } = require("../controller/billController");
const { getCategoryData, addCategory, getCategories, getItems } = require("../controller/categoryController");

router.post("/category", addFields);
router.get("/getdata", getData);
router.get("/category", getCategory);
router.get("/product", getProducts);

router.delete("/category/:id", deleteCategory);
router.put("/category/:id", updateFields);
router.get("/getdata", getData);
router.post("/bill", addBill);
router.get("/bills", getBillData);
router.get("/getCategoryData", getCategoryData); 
router.post("/addcategory", addCategory);
router.get("/categories", getCategories); 
router.get("/items", getItems); 


module.exports = router;
