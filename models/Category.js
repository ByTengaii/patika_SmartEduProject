const mongoose = require('mongoose');
const { Schema } = mongoose;
const slugify = require('slugify');

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique : true
    },
    slug: {
        type:String ,
        unique: true
    },
});

categorySchema.pre('validate', function(next){
    this.slug = slugify(this.name,{
        lower:true,
        strict: true
    });
    next(); 
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
