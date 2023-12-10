const express = require('express');
const authController = require('./../controller/authController');
const { route } = require('./categoryRoutes');
const router = express.Router();

router.route('/signup').post(authController.createUser); // localhost:3000/users/signup
router.route('/login').post(authController.loginUser);
router.route('/logout').get(authController.logoutUser);
router.route('/dashboard').get(authController.getUserDashboard);
module.exports = router;