const User = require('./../models/User');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
    try{
        const user = await User.create(req.body);
        res.status(201).json({
            message: 'Success',
            user
        });
    }
    catch(error){
        res.status(400).json({
            message: "User can't created",
            error
        });
    }
}

exports.loginUser = async (req, res) => {
    try{
        const {email, password} = req.body;
        await User.findOne({ email: email },(err, user) => {
            if(user)
            {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (result)
                    {
                        res.status(201).send("Login success");
                    }
                })
            }
        });
    }
    catch(error){
        const {email, password} = req.body;
        res.status(400).json({
            message: "Login Fail",
            email,
            password,
            error
        });
    }
}