const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/products');
const reportRoutes = require('./routes/report');

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/ShoeStore')
  .then(() => console.log('✅ Fullstack Project Connected to MongoDB!'))
  .catch(err => console.error('❌ Connection error:', err));
app.use('/api/products', productRoutes);
app.use('/api/reports', reportRoutes);
app.listen(3000, () => console.log('🚀 Server is flying on http://localhost:3000'));