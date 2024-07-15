//Ofek Daida ID 315143958 , Daniella Aharonov ID: 314750621, Selena Matusevich ID: 206511503

const express = require('express');
const router = express.Router();
const caloriesController = require('../controllers/caloriesController');

router.post('/addcalories', caloriesController.addCalories);

module.exports = router;
