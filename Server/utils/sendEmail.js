require('dotenv').config()
const nodemailer = require('nodemailer')

const sendEmail = (to, subject, text) => {
    try{
        const transporter = nodemailer.createTransport({
            service: process.env.MAIL_SERVICE,
            port: process.env.MAIL_PORT,
            secure: true,
            auth: {
                user: process.env.MAIL_AUTH_USER,
                pass: process.env.MAIL_AUTH_PASS
            }
        })
    
        const mailOptions = {
            from: process.env.MAIL_AUTH_USER,
            to: to,
            subject: subject,
            text: text
        }
    
        transporter.sendMail(mailOptions)

        console.log("Email sent successfully")
    }
    catch(error){
        console.log("Error sending email")
        console.log(error)
    }
}

module.exports = sendEmail