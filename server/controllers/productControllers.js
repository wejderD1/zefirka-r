const path = require("path");
const fs = require("fs");
const productsData = require("../data/productsData");

const writeFile = (data) => {
  fs.writeFile(
    path.join(__dirname, "..", "public", "products.json"),
    data,
    "utf8",
    (err) => {
      if (err) {
        console.error("Error writing to a file:", err);
        return;
      }
      console.log("Object successfully written to file");
    }
  );
};

//GET
const getAllProducts = (req, res) => {
  res.json(productsData);
};

//POST
const addNewProduct = (req, res) => {
  const product = req.body;

  if (!product) {
    res.status(400).json({ message: `Product data error - ${product}` });
  } else {
    productsData.push(product);
    writeFile(JSON.stringify(productsData));
    res.status(200).json({ message: `New product add into list` });
  }
};

//UPDATE
const updateProduct = (req, res) => {
  const productId = req.params.id;
  const updateData = req.body;
  const index = productsData.findIndex((product) => product.id === productId);

  if (index !== -1) {
    productsData[index] = { ...productsData[index], ...updateData };

    writeFile(JSON.stringify(productsData));

    res
      .status(200)
      .json({ message: `product data with id ${productId} sucefully update` });
  } else {
    res.status(404).json({ message: `product update error` });
  }
};

//DELETE
const removeProduct = (req, res) => {
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
};

module.exports = {
  getAllProducts,
  addNewProduct,
  updateProduct,
  removeProduct,
};
