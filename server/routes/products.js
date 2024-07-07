const Router = require("express");

const checkDuplicateId = require("../middleware/checkDuplicateId");
const productsData = require("../data/productsData")
const {
  getAllProducts,
  addNewProduct,
  updateProduct,
  removeProduct,
} = require("../controllers/productControllers");

const router = new Router();

//get product localhost:5000/products/
router.get("/products", getAllProducts);

//add product POST
router.post("/products/new-product", checkDuplicateId(productsData), addNewProduct);

//update product PATCH
router.patch("/products/:id", updateProduct);

//remove product DELETE
router.delete("/products/:id", removeProduct);

module.exports = router;