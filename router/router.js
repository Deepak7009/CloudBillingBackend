const express = require("express");
const router = express.Router();

const {
  addProduct,
  getProducts,
  deleteProduct,
  updateProduct,
  } = require("../controller/productController");
  const { addBill, getBillData } = require("../controller/billController");
  
  const { getProductData, addCategory, getCategories, getAllProducts } = require("../controller/categoryController");
  const { addExpens, getExpens, updateExpens, deleteExpens }
  = require("../controller/expensisesController");
  const { registerUser, loginUser } = require("../controller/userController");
  // const auth = require("../middleware/auth");
  
router.post("/product", addProduct);
router.get("/get-products", getProducts);
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

router.post('/register', registerUser);
router.post('/login', loginUser); 
// router.get('/protectedRoute', auth, (req, res) => {
//   res.json({ msg: 'Protected route accessed successfully', user: req.user });
// });


module.exports = router;
