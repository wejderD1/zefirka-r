const Router = require("express");
const fs = require("fs");

const router = new Router();
const advertisingData = JSON.parse(
  fs.readFileSync("public/advertising.json", "utf-8")
);

const writeFile = (data) => {
  fs.writeFile("public/advertising.json", data, "utf8", (err) => {
    if (err) {
      console.error("Ошибка записи в файл:", err);
      return;
    }
    console.log("Объект успешно записан в файл");
  });
};

//GET product localhost:5000/advertising
router.get("/advertising", function (req, res) {
  res.json(advertisingData);
});

//POST add advertisin
router.post("/advertising/new-advertising", (req, res) => {
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
});

//DELETE
router.delete("/advertising/:id", (req, res) => {
  const id = req.params.id;
  const index = advertisingData.findIndex((el) => el.id === id);

  if (index !== -1) {
    advertisingData.splice(index, 1);
    writeFile(JSON.stringify(advertisingData));

    res.status(200).json({ message: `Advertising is deleted id = ${id}` });
  } else {
    res.status(404).json({ message: `Advertising with id ${id} not found` });
  }
});

module.exports = router;
