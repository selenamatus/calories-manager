const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');
const caloriesRoutes = require('./routes/calories');
const usersRoutes = require('./routes/users');
const reportRoutes = require('./routes/report');
const aboutRoutes = require('./routes/about');

const app = express(); // Creating an instance of Express
app.use(cors()); // Using CORS to prevent cross-domain issues
app.use(bodyParser.json()); // Using body-parser to parse JSON from requests

// Root route
app.get('/', (req, res) => {
  res.send('API is running');
});

// Defining routes
app.use('/calories', caloriesRoutes);
app.use('/users', usersRoutes);
app.use('/reports', reportRoutes);
app.use('/about', aboutRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
