const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique : true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
