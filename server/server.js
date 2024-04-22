const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

const ClientBuildPath = path.join(__dirname, "../");

app.use(express.json());
app.use(express.static(ClientBuildPath));

app.get((req, res) => {
  res.sendFile(path.join(__dirname, "../buid/index.html"));
});

app.listen(PORT, () => console.log("Serever start"));

