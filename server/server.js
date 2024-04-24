const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors);
app.use(express.json());
app.use(express.static("public"));

const jsonData = JSON.parse(fs.readFileSync('public/products.json', 'utf-8'));

app.get(("/admin/products"), (req, res) => {
  // res.json(jsonData);
  res.json({"user": "Yurii"});
});

app.listen(PORT, () => console.log("Serever start"));

