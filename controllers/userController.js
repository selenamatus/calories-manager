const User = require('../models/user');
const mongoose = require('mongoose');

exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    res.json(user);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
