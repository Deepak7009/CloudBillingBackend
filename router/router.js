const express = require("express");
const router = express.Router();

const { googleAuth } = require("../controller/authController");

const {
  addProduct,
  getProducts,
  deleteProduct,
  updateProduct,
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

const { addBill, getBillData, addTableBill } = require("../controller/billController");

const { addNewCategories, getNewCategories, updateNewCategories, deleteNewCategories } = require('../controller/categoriesController')
const { getProductData, addCategory, getCategories, getAllProducts } = require("../controller/categoryController");
const { addExpens, getExpens, updateExpens, deleteExpens }
  = require("../controller/expensisesController");
const { registerUser, loginUser, getUserDetails, updateUser } = require("../controller/userController");
// const auth = require("../middleware/auth");

const {
  addStructureFields,
  getStructureData,
  deleteStructure,
} = require("../controller/structureController");


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get('/user/:userId', getUserDetails);
router.put("/user/:userId", updateUser);

router.post("/product/:userId", addProduct);
router.get("/get-products/:userId", getProducts);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

router.post("/bill", addBill);
router.get("/bills", getBillData);

router.get("/get-product-data", getProductData);
router.post("/addcategory", addCategory);
router.get("/categories", getCategories);
router.get("/products", getAllProducts);

router.post("/expenses", addExpens);
router.get("/expenses", getExpens);
router.put("/expens/:id", updateExpens);
router.delete("/expens/:id", deleteExpens);

router.post("/newcategories", addNewCategories);
router.get("/newcategories", getNewCategories);
router.put("/newcategories/:id", updateNewCategories);
router.delete("/newcategories/:id", deleteNewCategories);

router.post("/structure", addStructureFields);
router.get("/getStructure", getStructureData);
router.delete("/deleteStructure/:id", deleteStructure);


module.exports = router;