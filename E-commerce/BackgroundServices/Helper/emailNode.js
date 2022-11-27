const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()


const mailOptions={
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.GMAIL_USER, 
      pass: process.env.GMAIL_PASSWORD, 
    },
}

console.log(mailOptions.auth)


function createTransporter(mailconfig){
    const transporter= nodemailer.createTransport(mailconfig)
    return transporter;
}

const sendEmail= async (messageOption)=>{
    console.log();
    const transporter= createTransporter(mailOptions)
    await transporter.verify()
    await transporter.sendMail(messageOption)
   
    console.log("transporter");
}

module.exports={sendEmail}