const express = require('express');
const courseController = require('../controller/courseController');
const router = express.Router();
const roleMiddleware=  require("../middleware/roleMiddleware");

router.route('/').post(roleMiddleware(["teacher","admin"]),courseController.createCourse); //courses
router.route('/').get(courseController.getAllCourses);
router.route('/course/:slug').get(courseController.getCourse);

module.exports = router;