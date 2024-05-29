const express = require("express");
const router = express.Router();
const {
  addFields,
  getData,
  deleteCategory,
  updateFields,
} = require("../controller/categoryController");

router.post("/category", addFields);
router.get("/getdata", getData);
router.delete("/category/:id", deleteCategory);
router.put("/category/:id", updateFields);


module.exports = router;
