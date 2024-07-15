//Ofek Daida ID 315143958 , Daniella Aharonov ID: 314750621, Selena Matusevich ID: 206511503

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');
const caloriesRoutes = require('./routes/calories');
const usersRoutes = require('./routes/users');
const reportRoutes = require('./routes/report');
const aboutRoutes = require('./routes/about');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', caloriesRoutes);
app.use('/api', usersRoutes);
app.use('/api', reportRoutes);
app.use('/api', aboutRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
