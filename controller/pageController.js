exports.getIndex = (req, res) => {
    console.log(req.session.userID);
    res.status(200).render('index', {
        page_name : 'index'
    });
}
exports.getAbout = (req, res) => {
    res.status(200).render('about', {
        page_name : 'about'
    });
}

exports.getRegister = (req, res) => {
    res.status(200).render('register', {
        page_name : 'register'
    });
}

exports.getLogin = (req, res) => {
    res.status(200).render('login', {
        page_name : 'login'
    });
}
