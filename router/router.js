const express = require("express");
const router = express.Router();
const { addFields, getData } = require("../controller/categoryController");
const { addBill } = require("../controller/billController");

router.post("/category", addFields);
router.get("/getdata", getData); 
router.post("/bill", addBill);



module.exports = router;
