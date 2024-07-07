const fs = require("fs");
const path = require("path");

const advertisingData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "public", "advertising.json"), "utf-8")
);

module.exports = advertisingData;