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

//Register Handle
router.post('/register', (request, response) => {
    const { name, email, password, password2 } = request.body;
    let errors = [];
    //Check required fields
    if (!name || !email || !password || !password2) {
        errors.push({ msg: 'Please fill in all fields' });
    }
    //Check passwords match
    if (password !== password2) {
        errors.push({ msg: 'Passwords do not match' });
    }
    //Check pass length
    if (password.length < 6) {
        errors.push({ msg: 'Password should be at least 6 characters' });
    }

    if (errors.length > 0) {
        //Means we have an issue and time to re-render the registration form. When we use the partials messages ejs.
        response.render('register', {
            errors,
            name,
            email,
            password,
            password2
        });
    } else {
        //Means the validation on registration passes
        User.findOne({ email: email }) //Mongoose to find one record
            .then(user => {
                if (user) {
                    //User exists
                    errors.push({ msg: 'Email is already registered' })
                    response.render('register', {
                        errors,
                        name,
                        email,
                        password,
                        password2
                    });
                } else {
                    const newUser = new User({
                        name,
                        email,
                        password
                    });

                    //Hash password. Generate a salt for the hash. Get ready for a callback and embedded callback func
                    bcrypt.genSalt(10, (err, salt) =>
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if(err) throw err;
                            //Set password plain text to hashed
                            newUser.password = hash; 
                            //Save the newUser to MongoDB
                            newUser.save()
                                .then(user => {
                                    request.flash('success_msg', 'You are now registered and can log in');
                                    response.redirect('/users/login');
                                })
                                .catch(err => console.log(err));
                         }))
                }
            });
    }
});

//Login Handle
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
});

//Logout Handle
router.get('/logout', (request, response) => {
    request.logout();
    request.flash('success_msg', 'You are logged out');
    response.redirect('/users/login');
})

module.exports = router;