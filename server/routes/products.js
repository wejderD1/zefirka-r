const { log } = require("console");
const Router = require("express");
const fs = require("fs");

const router = new Router();
const productsData = JSON.parse(
  fs.readFileSync("public/products.json", "utf-8")
);

const writeFile = (data) => {
  fs.writeFile("public/products.json", data, "utf8", (err) => {
    if (err) {
      console.error("Ошибка записи в файл:", err);
      return;
    }
    console.log("Объект успешно записан в файл");
  });
};

//get product localhost:5000/products/
router.get("/products", (req, res) => {
  res.json(productsData);
});

//add product
router.post("/products/new-product", (req, res) => {
  const product = req.body;

  if(!product) {
    res.status(404).json({message: `Product data error - ${product}`})
  } else {
    productsData.push(product);
    writeFile(JSON.stringify(productsData));
    res.status(200).json({message: `New product add into list`});

  }

});

//remove product
router.delete("/products/:id", (req, res) => {
  const productId = req.params.id;

  const index = productsData.findIndex((product) => product.id === productId);

  if (index !== -1) {
    productsData.splice(index, 1);
    writeFile(JSON.stringify(productsData));
    res
      .status(200)
      .json({ message: `Product with ID ${productId} successfully deleted.` });
  } else {
    res.status(404).json({ error: `Product with ID ${productId} not found.` });
  }
});

module.exports = router;
