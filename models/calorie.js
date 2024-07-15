//Ofek Daida ID 315143958 , Daniella Aharonov ID: 314750621, Selena Matusevich ID: 206511503

const mongoose = require('mongoose');

const calorieSchema = new mongoose.Schema({
  user_id: Number,
  year: Number,
  month: Number,
  day: Number,
  id: Number,
  description: String,
  category: String,
  amount: Number
});

module.exports = mongoose.model('Calorie', calorieSchema);
