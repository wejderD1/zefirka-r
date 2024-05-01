const Router = require("express");
const fs = require("fs");

const router = new Router();

const advertisingData = JSON.parse(fs.readFileSync('public/advertising.json', 'utf-8'));


//get product localhost:5000/advertising
router.get('/advertising', function(req, res) {
  res.json(advertisingData);
});

module.exports = router;
