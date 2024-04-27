const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

// respond with "hello world" when a GET request is made to the homepage
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const productsData = JSON.parse(fs.readFileSync('public/products.json', 'utf-8'));
const advertisingData = JSON.parse(fs.readFileSync('public/advertising.json', 'utf-8'));

app.get('/products', function(req, res) {
  res.json(productsData);
});

app.get('/advertising', function(req, res) {
  res.json(advertisingData);
});

app.listen(PORT, () => console.log("Serever start " + PORT ));

