const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
  size: { type: Number, required: true, min: 35, max: 50 },
  stock: { type: Number, required: true, min: 0 }
});

const productSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  base_price: { type: Number, required: true, min: 0 },
  category: String,
  image: String,
  variants: [variantSchema],
  createdAt: { type: Date, default: Date.now }
});
productSchema.index({ brand: 1, category: 1 });
module.exports = mongoose.model('Product', productSchema);