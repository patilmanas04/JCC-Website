require('dotenv').config()
const nodemailer = require('nodemailer')
const ejs = require('ejs')

const sendEmail = async (to, subject, url) => {
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
            // text: url,
            html: await ejs.renderFile(__dirname + '/../views/EmailVerification.ejs', { url: url })
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