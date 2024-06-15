const express = require('express');
const router = express.Router();
const { addCalories, getReport, getAbout } = require('../controllers/calorieController');

router.post('/addcalories', addCalories);
router.get('/report', getReport);
router.get('/about', getAbout);

module.exports = router;
