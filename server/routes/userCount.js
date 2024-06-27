const Router = require("express");

const router = new Router();

let userCount = 34;

// Маршрут для получения текущего значения счетчика
router.get('/user-count', (req, res) => {
  userCount += 1;
  res.json(userCount);
}); 

// Маршрут для получения текущего значения счетчика
router.post('/user-count', (req, res) => {
  userCount += 1;
  res.json(userCount);
});

module.exports = router;
