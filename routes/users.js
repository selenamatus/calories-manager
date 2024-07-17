//Ofek Daida ID 315143958 , Daniella Aharonov ID: 314750621, Selena Matusevich ID: 206511503

const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Defining the GET route for retrieving user details by ID
router.get('/:id', usersController.getUserById);


module.exports = router;


