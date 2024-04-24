const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

// respond with "hello world" when a GET request is made to the homepage
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const jsonData = JSON.parse(fs.readFileSync('public/products.json', 'utf-8'));

app.get('/products', function(req, res) {
  res.json(jsonData);
});

app.listen(PORT, () => console.log("Serever start " + PORT ));

