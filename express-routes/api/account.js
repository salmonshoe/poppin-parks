const router = require('express').Router();
const accountController = require('../../controllers/accountController');
const passport = require('../../config/passport');


// For connecting to '/api/account/signup/'
router.route('/signup')
    .post(accountController.signup);

// Connecting to '/api/account/signin'
router.route('/signin')
    .post(accountController.signin);

// Connecting to '/api/account/verify' + '?token={ object id of a User Session } 
router.route('/verify')
    .get(accountController.verify);

// Connecting to '/api/account/logout' + ?token=iuh21iu2h1iou4 (example)
router.route('/logout')
    .get(accountController.logout);

//================================ PASSPORT ============================================

// Passport test /api/account/register
// router.route('/register')
//     .post(accountController.register);

module.exports = router;