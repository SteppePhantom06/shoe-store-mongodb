const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  productId: mongoose.Schema.Types.ObjectId,
  quantity: Number,
  price: Number,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Order', orderSchema);
