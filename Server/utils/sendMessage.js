require('dotenv').config()
const nodemailer = require('nodemailer')
const ejs = require('ejs')

const sendMessage = (type, name, company, email, message) => {
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
    
        ejs.renderFile(__dirname + '/../views/ContactMail.ejs', { type: type, name: name, company: company, email: email, message: message }, (err, template) => {
            if(err){
                console.log(err)
            }
            else{
                const mailOptions = {
                    from: process.env.MAIL_AUTH_USER,
                    to: process.env.MAIL_AUTH_USER,
                    subject: `New Contact Form Submission from ${name}`,
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

module.exports = sendMessage