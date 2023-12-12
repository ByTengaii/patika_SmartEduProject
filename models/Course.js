const mongoose = require('mongoose');
const { Schema } = mongoose;
const slugify = require('slugify');

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
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        default: Date.now
    },
    slug: {
        type:String ,
        unique: true
    },
});

courseSchema.pre('validate', function(next){
    this.slug = slugify(this.name,{
        lower:true,
        strict: true
    });
    next(); 
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
