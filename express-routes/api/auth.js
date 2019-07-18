const router = require('express').Router();
const authController = require('../../controllers/authController');

// For connecting to '/api/auth/login'
router.route('/login')
    .post(authController.login)

module.exports = router;