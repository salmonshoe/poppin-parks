const router = require('express').Router();
const authController = require('../../controllers/authController');

// To '/api/auth/login'
router.route('/login')
    .post(authController.login)

// To '/api/auth/signup'
router.route('/signup')
    .post(authController.signup)

// To '/api/auth/logout'
router.route('/logout')
    .get(authController.logout)

// To '/api/auth/user_data'
router.route('/user_data')
    .get(authController.getData)

// To '/api/auth/reviews'
router.route('/reviews')
    .get(authController.getReviews)
    .post(authController.saveReviews)

module.exports = router;