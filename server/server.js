const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const fs = require('fs');

const productRoute = require("./routes/products");
const advertisingRoute = require("./routes/advertising");

const app = express();
dotenv.config();

//Constants
const PORT = 5000;

//Middelware
app.use(cors());
app.use(express.json());

//Routers
app.use('/', productRoute);
app.use('/', advertisingRoute);

app.listen(PORT, () => console.log("Server starting as port " + PORT));

