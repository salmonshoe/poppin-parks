//Logins and Registers will go here
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport'); //When we do the passport authentication on local strategy

//User model from Mongo
const User = require('../models/User');


//Login Page
router.get('/login', (request, response) => response.render('login'));

//Register Page
router.get('/register', (request, response) => response.render('register'));



//Login Handle
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
});

//Logout Handle
router.get('/logout', (request, response) => {
    request.logout();
    request.flash('success_msg', 'You are logged out');
    response.redirect('/login');
})

module.exports = router;