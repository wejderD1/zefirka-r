const fs = require("fs");
const path = require("path");
const advertisingData = require("../data/advertisingData");

const writeFile = (data) => {
  fs.writeFile(
    path.join(__dirname, "..", "public", "advertising.json"),
    data,
    "utf8",
    (err) => {
      if (err) {
        console.error("Ошибка записи в файл:", err);
        return;
      }
      console.log("Объект успешно записан в файл");
    }
  );
};

function getAds(req, res) {
  res.json(advertisingData);
}

const addAds = (req, res) => {
  const newData = req.body;

  if (newData) {
    res
      .status(200)
      .json({ message: `Advertising is created id = ${newData.id}` });
    advertisingData.push(newData);
    writeFile(JSON.stringify(advertisingData));
  } else {
    res.status(404).json({ message: `Advertising data error` });
  }
};

const removeAds = (req, res) => {
  const id = req.params.id;
  const index = advertisingData.findIndex((el) => el.id === id);

  if (index !== -1) {
    advertisingData.splice(index, 1);
    writeFile(JSON.stringify(advertisingData));

    res.status(200).json({ message: `Advertising is deleted id = ${id}` });
  } else {
    res.status(404).json({ message: `Advertising with id ${id} not found` });
  }
};

module.exports = {
  getAds,
  addAds,
  removeAds,
};
