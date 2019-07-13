const router = require('express').Router();
const usersController = require('../../controllers/usersController');

// const bcrypt = require('bcryptjs');
// const passport = require('passport'); // Check if you need to use these dependencies here..

// Matches with "/api/users"
router.route('/')
    .get(usersController.findAll)
    .post(usersController.create);

// Matches with "/api/users/:id"
router.route('/:id')
    .get(usersController.findById)
    .put(usersController.update)
    .delete(usersController.remove);

module.exports = router;