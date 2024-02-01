const express = require('express');
const authController = require('./../controller/authController');
const { route } = require('./categoryRoutes');
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { query } = require('express-validator');


router.route('/signup').post([
    query('name').not().isEmpty().withMessage('Please Enter Your Name'),
    query('email').isEmail().withMessage('Please Enter Valid Email')
        .custom((userEmail)=> {
            return User.findOne({email:userEmail}).then(user => {
                if (user) {
                    return Promise.reject('Email is already exists!')
                }
            })
        }),
    query('password').not().isEmpty().withMessage('Please Enter Your pass')

],authController.createUser); // localhost:3000/users/signup
router.route('/login').post(authController.loginUser);
router.route('/logout').get(authController.logoutUser);
router.route('/dashboard').get(authMiddleware,authController.getUserDashboard);
module.exports = router;