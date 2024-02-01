const express = require('express');
const courseController = require('../controller/courseController');
const router = express.Router();
const roleMiddleware=  require("../middleware/roleMiddleware");

router.route('/').post(roleMiddleware(["teacher","admin"]),courseController.createCourse); //courses
router.route('/').get(courseController.getAllCourses);
router.route('/course/:slug').get(courseController.getCourse);
router.route('/course/enroll').post(courseController.enrollCourse);
router.route('/course/release').post(courseController.releaseCourse);
module.exports = router;