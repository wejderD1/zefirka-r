const Router = require("express");
const fs = require("fs");

const router = new Router();
const productsData = JSON.parse(fs.readFileSync('public/products.json', 'utf-8'));

const writeFile = (data) => {
    fs.writeFile('public/products.json', data, 'utf8', (err) => {
    if (err) {
      console.error('Ошибка записи в файл:', err);
      return;
    }
    console.log('Объект успешно записан в файл');
  });
}

//get product localhost:5000/products/
router.get('/products', (req, res) => {
  res.json(productsData);
});

//add product
router.post('/products/new-product', (req, res) => {
  const product = req.body;
  productsData.push(product);
  const endData = JSON.stringify(productsData);
  writeFile(endData);
})

//remove product
router.post('/products/remove', (req, res) => {
  const removeObj = req.body;
  const endData = JSON.stringify(productsData.filter(el => el.id !== removeObj.id));
  writeFile(endData)
})

module.exports = router;