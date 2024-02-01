const nodemailer = require('nodemailer');

exports.getIndex = (req, res) => {
    console.log(req.session.userID);
    res.status(200).render('index', {
        page_name: 'index',
    });
};
exports.getAbout = (req, res) => {
    res.status(200).render('about', {
        page_name: 'about',
    });
};

exports.getRegister = (req, res) => {
    res.status(200).render('register', {
        page_name: 'register',
    });
};

exports.getLogin = (req, res) => {
    res.status(200).render('login', {
        page_name: 'login',
    });
};

exports.getContact = (req, res) => {
    res.status(200).render('contact', {
        page_name: 'contact',
    });
};

exports.sendEmail = async (req, res) => {
    try
    {
        let outputMessage = `
        <h1> Mail Details </h1>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h2>Message</h2>
        <p>${req.body.message}</p>
        `;
    
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                user: 'yt.agirgurkan@gmail.com',
                pass: 'epcd bgbl flyi tyho1',
            },
        });
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: '"Smart EDU 👻" anan@gmail.com', // sender address
            to: 'agirgurkan06@gmail.com', // list of receivers
            subject: 'New Messages !', // Subject line
            html: outputMessage, // html body
        });
    
        console.log('Message sent: %s', info.messageId);
        req.flash('success','We recivied your email !');
        res.status(200).redirect('contact');   
    }catch(err){
        req.flash("error", `Something happened!`);
        res.status(200).redirect('contact');
    }
    
};

//epcd bgbl flyi tyho

