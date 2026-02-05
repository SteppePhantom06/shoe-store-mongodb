const router = require('express').Router();
const User = require('../models/User');
router.post('/', async (req,res)=>{
  const user = await User.create(req.body);
  res.json(user);
});
router.get('/', async (req,res)=>{
  const users = await User.find();
  res.json(users);
});
module.exports = router;

