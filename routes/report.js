const router = require('express').Router();
const Order = require('../models/Order');
router.get('/loyalty', async (req, res) => {
  try {
    const result = await Order.aggregate([
      {
        $group: {
          _id: "$productId",
          totalOrders: { $sum: "$quantity" },
          revenue: { $sum: { $multiply: ["$price", "$quantity"] } }
        }
      },
      { $sort: { totalOrders: -1 } }
    ]);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
