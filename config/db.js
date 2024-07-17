//Ofek Daida ID 315143958 , Daniella Aharonov ID: 314750621, Selena Matusevich ID: 206511503
const mongoose = require('mongoose');
require('dotenv').config();

// Connecting to MongoDB using environment variables
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

module.exports = db; // Exporting the database connection
