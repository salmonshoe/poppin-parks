const router = require('express').Router();
const usersController = require('../../controllers/usersController');
const db = require('../../models');
const bcrypt = require('bcryptjs');
const passport = require('passport'); // Check if you need to use these dependencies here..

// Matches with "/api/users"
router.route('/')
    .get(usersController.findAll)
    .post(usersController.create);

// Matches with "/api/users/:id"
router.route('/:id')
    .get(usersController.findById)
    .put(usersController.update)
    .delete(usersController.remove);

// Matches with '/api/users/login' ?
router.get('/login', (req, res) => res.render('login')); 

// Sign Up handle
router.post('/register', (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    db.User.findOne({ email: email })
    .then(user => {
        if (user) {
            errors.push({ msg: 'Email is already registered' })
            Response.render('register', {
                errors,
                firstName,
                lastName, 
                email,
                password
            });
        } else {
            const newUser = new User({
                firstName,
                lastName,
                email,
                password
            });

            // Hash password. Generate a salt for the hash.Get ready for a callbacl and embedded callback functions
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    // Set password plain text to hashed
                    newUser.password = hash;
                    // Save the newUser to MongoDB
                    newUser.save()
                    .then(user => {
                        req.flash('success_msg', 'You are now reigstered and can log in');
                        res.redirect('/users/login');
                    })
                    .catch(err => console.log(err));
                })
            })
        }
    });
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