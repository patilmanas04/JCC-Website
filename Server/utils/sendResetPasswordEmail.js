require('dotenv').config()
const nodemailer = require('nodemailer')
const ejs = require('ejs')

const sendResetPasswordEmail = async (to, subject, url) => {
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
    
        ejs.renderFile(__dirname + '/../views/ResetPassword.ejs', { url: url }, (err, template) => {
            if(err){
                console.log(err)
            }
            else{
                const mailOptions = {
                    from: process.env.MAIL_AUTH_USER,
                    to: to,
                    subject: subject,
                    html: template
                }
            
                transporter.sendMail(mailOptions)
            }
        })
    }
    catch(error){
        console.log(error)
    }
}

module.exports = sendResetPasswordEmail