//Ofek Daida ID 315143958 , Daniella Aharonov ID: 314750621, Selena Matusevich ID: 206511503

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: String, 
  first_name: String,
  last_name: String,
  birthday: Date
});

module.exports = mongoose.model('User', userSchema);
