const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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
    }
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