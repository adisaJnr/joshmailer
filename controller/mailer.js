const dotenv = require("dotenv");
dotenv.config();

const nodemailer = require("nodemailer");


const sendingEmail = async (req, res) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
       
        pass: process.env.PWORD,
      }, tls:{
        rejectUnauthorized: false,
        minVersion: "TLSv1.2"
    },
    });
    const body = req.body;
    let message = {
      from: body.email,
      to: process.env.EMAIL,
      subject: body.subject + "✔",
      messages: body.message,
      name: body.name,
    };
    console.log(message);
    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log(err);
      }
      console.log(info);
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  sendingEmail,
};
