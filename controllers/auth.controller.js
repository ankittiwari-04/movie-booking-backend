const User = require('../models/user.model');
const jwtToken = require('../utils/generateToken');

exports.register = async (req, res) => {
  const user = await User.create(req.body);
  res.json({ token: jwtToken(user._id) });
};

exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  res.json({ token: jwtToken(user._id) });
};
