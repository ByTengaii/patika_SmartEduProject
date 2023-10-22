const express = require('express');
const pageController = require('../controller/pageController');
const router = express.Router();

router.route('/').get(pageController.getIndex);
router.route('/about').get(pageController.getAbout);
router.route('/register').get(pageController.getRegister);
router.route('/login').get(pageController.getLogin);


module.exports = router;