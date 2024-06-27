const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const fs = require('fs');

const productRoute = require("./routes/products");
const advertisingRoute = require("./routes/advertising");
const userCount = require("./routes/userCount");

const app = express();
dotenv.config();

//Constants
const PORT = 5000;

app.use(cors());
app.use(express.json());

//Routers
app.use("/", userCount);
app.use('/', productRoute);
app.use('/', advertisingRoute);

app.listen(PORT, () => console.log("Server starting as port " + PORT));
