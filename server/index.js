'use-strict';
/* eslint-disable no-console */
const nodemailer = require('nodemailer');
const express = require('express');
const app = express();

const transporter = nodemailer.createTransport('smtps://diego.segura%40mimetix.com:pass@smtp.gmail.com');

app.get('/sendmail/:email/:message', (req, res) => {
  const mailOptions = {
    from: req.params.email,
    to: 'diego.segura@mimetix.com',
    subject: 'Contacto desde la web de Mimetix',
    text: req.params.message,
  };
  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      res.status(200).end();
    } else {
      res.status(422).end();
    }
  });
});

app.listen(8081);
