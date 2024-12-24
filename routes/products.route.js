const express = require("express");
const productController = require("../controllers/product.controller.js");

const router = express.Router();

router.get("/", productController.getProducts);

router.post("/", productController.addProduct);

router.get("/:id", productController.getProductById);

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
