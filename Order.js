const mongoose = require('mongoose');
const orderItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  title: { type: String, required: true },  
  unitPrice: { type: Number, required: true }, 
  size: { type: Number, required: true },
  color: { type: String, required: true },
  qty: { type: Number, required: true, min: 1 }
}, { _id: false });
const orderSchema = new mongoose.Schema({
  userEmail: { type: String, required: true, trim: true, lowercase: true },
  createdAt: { type: Date, default: Date.now },
  total: { type: Number, required: true, min: 0 },
  items: { type: [orderItemSchema], required: true }
});
module.exports = mongoose.model('Order', orderSchema);
