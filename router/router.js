const express = require("express");
const router = express.Router();
// const auth = require("../middleware/auth");
const {
  addFields,
  getData,
  deleteCategory,
  updateFields,
} = require("../controller/productController");
const { addBill, getBillData, addTableBill } = require("../controller/billController");

const {
  getCategoryData,
  addCategory,
} = require("../controller/categoryController");

const { registerUser, loginUser } = require("../controller/userController");

const {
  addStructureFields,
  getStructureData,
  deleteStructure,
} = require("../controller/structureController");

router.post("/category", addFields);
router.get("/getdata", getData);
router.delete("/category/:id", deleteCategory);
router.put("/category/:id", updateFields);
router.get("/getdata", getData);
router.post("/bill", addBill);
router.get("/bills", getBillData);
router.get("/getCategoryData", getCategoryData);
router.post("/addcategory", addCategory);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/structure", addStructureFields);
router.get("/getStructure", getStructureData);
router.delete("/deleteStructure/:id", deleteStructure);
// router.get('/protectedRoute', auth, (req, res) => {
//   res.json({ msg: 'Protected route accessed successfully', user: req.user });
// });

module.exports = router;
