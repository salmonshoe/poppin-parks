//Anything for homepage or dashboard will go here
const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

//Welcome Page
router.get('/', (request, response) => response.render('welcome'));

//Dashboard - Protect with Auth.
router.get('/dashboard', (request, response) => 
    response.render('dashboard'));

module.exports = router;