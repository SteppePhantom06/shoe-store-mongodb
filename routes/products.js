const router = require('express').Router();
const Product = require('../models/Product');
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get('/filter', async (req, res) => {
  const { brand, category, sort = 'base_price' } = req.query;
  const filter = {};
  if (brand) filter.brand = new RegExp(brand, 'i');
  if (category) filter.category = category;

  try {
    const products = await Product.find(filter).sort(sort);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.put('/reduce-stock', async (req, res) => {
  const { productId, size } = req.body;
  if (!productId || !size) return res.status(400).json({ message: 'productId and size required' });

  try {
    const updated = await Product.updateOne(
      { _id: productId, "variants.size": size },
      { $inc: { "variants.$.stock": -1 } }
    );
    res.json({ message: 'Stock updated', result: updated });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
