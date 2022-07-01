const nodemailer = require("nodemailer");
const {validationResult} = require("express-validator");

const MailSender = async (req, res) => {
  const { name, email, password, } = req.body; 

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array(),
    });
  }


    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'zeeshanismail.webevis@gmail.com',
          // pass: 'NodeMailer@123'
          pass: 'quprilmeqcikmmko'
        }
      });
      
      var mailOptions = {
        from: 'zeeshanismail.webevis@gmail.com',
        to: email,
        subject: 'Your Account',
        text: `Hi ${name} Your User Name is ${email} and Password is ${password}`,
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    
};


module.exports = {
  MailSender,
};