const express = require('express');
const pageController = require('../controller/pageController');
const router = express.Router();
const redirectMiddleware = require("../middleware/redirectMiddleware");

router.route('/').get(pageController.getIndex);
router.route('/about').get(pageController.getAbout);
router.route('/register').get(redirectMiddleware,pageController.getRegister);
router.route('/login').get(redirectMiddleware,pageController.getLogin);
router.route('/contact').get(pageController.getContact);
router.route('/contact').post(pageController.sendEmail);


module.exports = router;