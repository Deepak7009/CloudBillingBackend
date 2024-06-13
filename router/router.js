const express = require("express");
const router = express.Router();
const { googleAuth } = require("../controller/authController");
const {
  addFields,
  getData,
  deleteCategory,
  updateFields,
} = require("../controller/productController");
const { addBill, getBillData } = require("../controller/billController");
const {
  getCategoryData,
  addCategory,
} = require("../controller/categoryController");
const { registerUser, loginUser } = require("../controller/userController");

// Routes
router.post("/category", addFields);
router.get("/getdata", getData);
router.delete("/category/:id", deleteCategory);
router.put("/category/:id", updateFields);
router.post("/bill", addBill);
router.get("/bills", getBillData);
router.get("/getCategoryData", getCategoryData);
router.post("/addcategory", addCategory);
router.post("/register", registerUser);

router.post("/login", loginUser);
router.post("/auth/google/callback", googleAuth);

module.exports = router;
