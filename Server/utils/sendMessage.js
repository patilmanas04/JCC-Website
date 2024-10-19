require('dotenv').config()
const nodemailer = require('nodemailer')

const sendMessage = (name, email, message) => {
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
            to: process.env.MAIL_AUTH_USER,
            subject: `Message from ${name} <${email}>`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        }
    
        transporter.sendMail(mailOptions)

        console.log("Message sent successfully")
    }
    catch(error){
        console.log("Error sending email")
        console.log(error)
    }
}

module.exports = sendMessage