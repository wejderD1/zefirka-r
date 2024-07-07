// Middleware для проверки уникальности ID
const checkDuplicateId = (data) => (req, res, next) => {
const newProduct = req.body;
  const existingProduct = data.find(el => el.id === newProduct.id);

  if (existingProduct) {
    return res.status(409).json({ message: 'Product with this ID already exists' });
  }

  next();
};

module.exports = checkDuplicateId;