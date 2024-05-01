const Router = require("express");
const fs = require("fs");

const router = new Router();

const productsData = JSON.parse(fs.readFileSync('public/products.json', 'utf-8'));

//get product localhost:5000/products/
router.get('/products', function(req, res) {
  res.json(productsData);
});

module.exports = router;