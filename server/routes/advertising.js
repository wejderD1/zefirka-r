const Router = require("express");
const fs = require("fs");

const router = new Router();
const advertisingData = JSON.parse(fs.readFileSync('public/advertising.json', 'utf-8'));


//get product localhost:5000/advertising
router.get('/advertising', function(req, res) {
  res.json(advertisingData);
});

const writeFile = (data) => {
  fs.writeFile('public/advertising.json', data, 'utf8', (err) => {
  if (err) {
    console.error('Ошибка записи в файл:', err);
    return;
  }
  console.log('Объект успешно записан в файл');
});
}

//add advertisin
router.post('/advertising/new-advertising', (req, res) => {
  const product = req.body;
  advertisingData.push(product);
  const endData = JSON.stringify(advertisingData);
  writeFile(endData);
})

module.exports = router;
