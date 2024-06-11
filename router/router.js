const express = require("express");
const router = express.Router();

const {
  addProduct,
  getProducts,
  deleteProduct,
  updateProduct,
} = require("../controller/productController");
const { addBill, getBillData, addTableBill } = require("../controller/billController");

const { addNewCategories, getNewCategories, updateNewCategories, deleteNewCategories } = require('../controller/categoriesController')
const { getProductData, addCategory, getCategories, getAllProducts } = require("../controller/categoryController");
const { addExpens, getExpens, updateExpens, deleteExpens }
  = require("../controller/expensisesController");
const { registerUser, loginUser, getUserDetails } = require("../controller/userController");
// const auth = require("../middleware/auth");

const {
  addStructureFields,
  getStructureData,
  deleteStructure,
} = require("../controller/structureController");

router.post("/product/:id", addProduct);
router.get("/get-products/:id", getProducts);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

router.post("/bill/:id", addBill);
router.get("/bills/:id", getBillData);

router.get("/get-product-data/:id", getProductData);
router.post("/addcategory/:id", addCategory);
router.get("/categories/:id", getCategories);
router.get("/products/:id", getAllProducts);

router.post("/expenses/:id", addExpens);
router.get("/expenses/:id", getExpens);
router.put("/expens/:id", updateExpens);
router.delete("/expens/:id", deleteExpens);

router.post("/newcategories/:id", addNewCategories);
router.get("/newcategories/:id", getNewCategories);
router.put("/newcategories/:id", updateNewCategories);
router.delete("/newcategories/:id", deleteNewCategories);

router.post("/register/:id", registerUser);
router.post("/login/:id", loginUser);
router.post("/structure/:id", addStructureFields);
router.get("/getStructure/:id", getStructureData);
router.delete("/deleteStructure/:id", deleteStructure);

router.get('/user/:userId', getUserDetails);

//router.put("/update", verifyToken, updateUsername);

module.exports = router;