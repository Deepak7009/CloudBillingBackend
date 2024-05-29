const express = require("express");
const router = express.Router();
const { addFields, getData } = require("../controller/categoryController");

router.post("/category", addFields);
router.get("/getdata", getData); 


module.exports = router;
