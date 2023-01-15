const nodemailing = require('nodemailing');

const dotenv = require('dotenv').config()

const emailSending =  (req,res)=>{
    const body = req.body
    // console.log(body.email + "🎆🧨");
      nodemailing.send({
        Host: process.env.HOST,
        Port: 2525,
        Username: body.email,
        Password: process.env.PWORD,
        To: process.env.EMAIL,
        From: body.email,
        Subject: body.subject,
        Body: body.message,
        
     }).then((message) =>{
     //anything goes here....
         console.log(message);
       }
     );

}

module.exports = {
    emailSending

}