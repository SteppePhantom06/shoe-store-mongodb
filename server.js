const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const userRoutes = require('./routes/Users');
const reportRoutes = require('./routes/report');


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);
app.use('/api/reports', reportRoutes);

mongoose.connect('mongodb://localhost:27017/ShoeStore')
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Connection error:', err));

app.listen(3000, () => console.log('Server: http://localhost:3000'));
