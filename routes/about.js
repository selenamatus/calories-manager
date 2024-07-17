//Ofek Daida ID 315143958 , Daniella Aharonov ID: 314750621, Selena Matusevich ID: 206511503

const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');

// Defining the GET route for retrieving developer information
router.get('/about', aboutController.getAbout);

module.exports = router;
