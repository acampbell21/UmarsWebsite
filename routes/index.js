var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('../config/config');

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  },
  tls: {
    rejectUnauthorized: false
  }
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var phoneNumber = req.body.phoneNumber;
  var content = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${name}</li>
      <li>Email: ${email}</li>
      <li>Phone Number: ${phoneNumber} </li>
    </ul>
    <h3>Message</h3>
    <p>${message}</p>
  `;

  var mail = {
    from: name,
    to: '"Fred Flinstone👻" <umar@umarmausoof.com>', //Change to email address that you want to receive messages on
    subject: 'Big Wook Energy',
    text: 'Hello World',
    html: content
  };

  transporter.sendMail(mail, (err, data) => {
    console.log(req.body.message);
    if (err) {
      res.json({
        msg: 'fail'
      });
    } else {
      res.json({
        msg: 'success'
      });
    }
  });
});

module.exports = router;
