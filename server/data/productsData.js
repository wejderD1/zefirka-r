const fs = require("fs");
const path = require("path");

//retrieving data from a file
const productsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "public", "products.json"), "utf-8")
);

module.exports = productsData;