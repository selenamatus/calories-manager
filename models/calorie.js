const mongoose = require('mongoose');

const CalorieSchema = new mongoose.Schema({
  user_id: String,
  year: Number,
  month: Number,
  day: Number,
  id: String, // Custom ID generated on the server side
  description: String,
  category: {
    type: String,
    enum: ['breakfast', 'lunch', 'dinner', 'other'],
  },
  amount: Number,
});

module.exports = mongoose.model('Calorie', CalorieSchema);
