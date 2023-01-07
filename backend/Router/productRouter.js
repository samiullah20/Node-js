const express = require("express");
const router = express.Router();
const {sendProduct, getProduct, updateProduct, getProductByID, deleteProduct} = require("../Controller/ProductController");

router.post("/postdata",sendProduct);
router.get("/getdata",getProduct);
router.get("/getproductbyid:id", getProductByID);
router.put("/updateproduct:id", (req,res)=>{updateProduct(req,res)});
router.delete("/deleteproduct:id", deleteProduct);
module.exports = router;