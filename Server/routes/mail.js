const experss = require('express')
const router = experss.Router()
const { body, validationResult } = require('express-validator')
const sendMessage = require('../utils/sendMessage')

router.post('/sendmessage', [
    body('name', 'Name is required').notEmpty().isLength({ min: 1 }),
    body('email', 'Email is required').isEmail(),
    body('message', 'Message is required').notEmpty().isLength({ min: 1 })
], async (req, res) => {
    let success = false

    try{
        const { name, email, message } = req.body

        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({ success, message: "Name, Email and Message should not be empty" })
        }

        sendMessage(name, email, message)

        success = true
        res.status(200).json({ success })
    }
    catch(error){
        console.error(error.message)
        res.status(500).json({
            success,
            message: "Internal Server Error!"
        })
    }
})

module.exports = router