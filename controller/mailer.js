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
      from: {
        address: body.email,
        name: body.email
      },
      to: process.env.EMAIL,
      subject: body.subject,
      text: body.message
      // html: body.message
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
