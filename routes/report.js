//Ofek Daida ID 315143958 , Daniella Aharonov ID: 314750621, Selena Matusevich ID: 206511503

const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

router.get('/report', reportController.getReport);

module.exports = router;

