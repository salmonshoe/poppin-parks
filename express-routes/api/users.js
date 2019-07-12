//Logins and Registers will go here
const router = require('express').Router();
// const bcrypt = require('bcryptjs');
// const passport = require('passport'); // Check if you need to use these dependencies here..

//User model from Mongo
const User = require('../../models/User');

router.route('/login')
    .get(function (req, res) {
        console.log('Hello World');
        res.json({
            "ERR": "but the right kind"
        });
    })

module.exports = router;