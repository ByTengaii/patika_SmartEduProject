const User = require("../models/User");

module.exports = async (req ,res, next) => {
    try {
        const user = await User.findOne({_id: req.session.userID})
        if (!user)
            return res.redirect("/");
    } catch (error) {
            return res.redirect("/");
    }
    next();
};