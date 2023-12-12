const Course = require('../models/Course');
const Category = require('./../models/Category');

exports.createCourse = async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.status(201).redirect('/courses');
    } catch (error) {
        res.status(400).json({
            message: 'Data not created',
            error,
        });
    };
};

exports.getAllCourses = async (req, res) => {
    try {
        const categorySlug = req.query.categories;
        const category = await Category.findOne({slug:categorySlug});
        let filter = {};
        if(categorySlug){
            filter = {category: category._id}
        }
        const courses = await Course.find(filter).sort("-date");
        const categories = await Category.find();

        res.render('courses',{
            courses,
            categories,
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