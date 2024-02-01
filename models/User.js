const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { type } = require('os');
const {Schema} = mongoose;

const userSchema = new Schema({
    name : {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum:["student", "teacher", "admin"],
        default: "student"
    },
    courses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Course"
    }]
});

userSchema.pre("save",function(next){
    const user = this;
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash;
        next();
    })
})

const User = mongoose.model('User', userSchema);
module.exports = User;