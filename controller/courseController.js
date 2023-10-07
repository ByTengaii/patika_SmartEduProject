const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.status(201).json({
            message: 'success',
            course,
            slug
        });
    } catch (error) {
        res.status(400).json({
            message: 'Data not created',
            error,
        });
    };
};

exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.render('courses',{
            courses,
            page_name : "courses"
        });
    } catch (error) {
        res.status(404).json({
            message: 'Courses not found',
            error,
        });
    };
};

exports.getCourse = async (req, res) => {
    try {
        const course = await Course.findOne({ slug : req.params.slug});
        res.render('course',{
            course,
            page_name : "courses"
        });
    } catch (error) {
        res.status(404).json({
            message: 'Courses not found',
            error,
        });
    };
};