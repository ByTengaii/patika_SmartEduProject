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
};

exports.loginUser = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({ email: email });
            if (!user)
                res.status(400).send('Invalid User');
        const same = await bcrypt.compare(password, user.password);
        if (same)
        {
            req.session.userID = user._id;
            res.status(200).redirect('/users/dashboard');
        }
        else
            res.status(400).send("Invalid password!");
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
};

exports.logoutUser = (req, res) => {
    try{
        req.session.destroy(()=> {
            res.redirect('/');
        });
    }
    catch (error) {
        res.send(error);
    }
};

exports.getUserDashboard = async (req, res) => {
    console.log("Selam aq");
    const user = await User.findOne({_id:req.session.userID});
    res.status(200).render('dashboard',{
        page_name: 'dashboard',
        user
    });
};