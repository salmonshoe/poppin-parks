const db = require('../models');

module.exports = {
    // login of a user
    login: (req, res) => {
        console.log(req.body);
        db.User.findOne({
            email: req.body.email,
            password: req.body.password
        }).then(//user => {
            // if(user.validPassword()) {
            //     res.json({
            //         success: true
            //     });
            // }
            res.json({
                "success": true
            })
            )
        .catch(err => {
            if (err) return console.log(err)
            else {
                return;
            } 
        })
    },
    // signup a user
    signup: (req, res) => {
        console.log(req.body);
        db.User
            .create(req.body)
            .then(
                res.redirect(307, '/api/auth/login')
            )
            .catch(err => {
                    console.log(err);
                    res.status(422).json(err)
                });
},
    // log users out
    logout: (req, res) => {
        db.User
    },
        // data on one user
        getData: (req, res) => {
            db.User
        },
            // read reviews from users
            getReviews: (req, res) => {

            },
                // create reviews from users
                saveReviews: (req, res) => {

                }
}