const nodemailer = require('nodemailer');
require('dotenv').config();
const { EMAIL_PASSWORD } = process.env;

const nodemailerConfig = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: 'developer.olga@meta.ua',
    pass: EMAIL_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);
const mail = {
  to: 'olga@ukr.net ',
  from: 'developer.olga@meta.ua',
  subject: 'Test letter',
  text: 'Test letter from sendgrid',
  html: '<h2>Test letter from nodemailer</h2>',
};
const sendMail = async ({ to, subject, text }) => {
  const mail = {
    from: 'developer.olga@meta.ua',
    to,
    subject,
    text,
  };
  try {
    const result = await transporter.sendMail(mail);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = sendMail;
