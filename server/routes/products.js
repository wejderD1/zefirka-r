const { log } = require("console");
const Router = require("express");
const fs = require("fs");

const router = new Router();

const productsData = JSON.parse(fs.readFileSync('public/products.json', 'utf-8'));

//get product localhost:5000/products/
router.get('/products', (req, res) => {
  res.json(productsData);
});

router.post('/products/new-product', (req, res) => {
  const product = req.body;
  productsData.push(product);
  const endData = JSON.stringify(productsData);
  fs.writeFile('public/products.json', endData, 'utf8', (err) => {
    if (err) {
      console.error('Ошибка записи в файл:', err);
      return;
    }
    console.log('Объект успешно записан в файл');
  });
})

router.post('/products/remove', (req, res) => {
  const removeObj = res.body;

  console.log(removeObj, "remove");
})

module.exports = router;