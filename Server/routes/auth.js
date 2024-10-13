require('dotenv').config()
const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const UserModel = require('../models/User')
const TokenModel = require('../models/Token')
const sendEmail = require('../utils/sendEmail')

// Regsiter a new user
router.post('/register', [
    body('firstName', 'First Name is required').notEmpty().isLength({ min: 1 }),
    body('lastName', 'Last Name is required').notEmpty().isLength({ min: 1 }),
    body('email', 'Email is required').isEmail(),
    body('password', 'Password must be at least 8 characters long').isLength({ min: 8 })
], async (req, res) => {
    let success = false

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ success, errors: errors.array() })
    }

    try{
        const { firstName, lastName, email, password } = req.body
        let user = await UserModel.findOne({ email: email })
        if(user){
            return res.status(400).json({
                success, 
                message: "User already exists!"
            })
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT_LENGTH))
        const hashedPassword = await bcrypt.hash(password, salt)

        user = await UserModel.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        })

        const token = await TokenModel.create({
            userId: user._id,
            token: crypto.randomBytes(32).toString('hex')
        })

        const url = `${process.env.CLIENT_URL}/users/${user._id}/verify-email/${token.token}`

        sendEmail(user.email, "Email Verification", `Click on the link to verify your email: ${url}`)

        success = true
        return res.status(200).json({ success, message: "An email sent to your mail id please verify" })
    }
    catch(error){
        console.error(error.message)
        res.status(500).json({
            success,
            message: "Internal Server Error!"
        })
    }
})

// Verify email
router.post('/users/:id/verify-email/:token', async (req, res) => {
    let success = false

    try{
        let user = await UserModel.findOne({ _id: req.params.id })
        if(!user){
            return res.status(400).json({
                success,
                message: "Invalid Url!"
            })
        }

        const token = await TokenModel.findOne({ token: req.params.token })
        if(!token){
            res.status(400).json({
                success,
                message: "Invalid Url!"
            })
        }

        user = await UserModel.updateOne({ _id: user._id }, { verified: true })

        success = true
        console.log("Email Verified Successfully!")
        return res.status(200).json({ success, message: "Email Verified Successfully!" })
    }
    catch(error){
        console.error(error.message)
        res.status(500).json({
            success,
            message: "Internal Server Error!"
        })
    }
})

// Login a user
router.post('/login', [
    body('email', 'Email is required').isEmail(),
    body('password', 'Password is required').isLength({ min: 1 })
], async (req, res) => {
    let success = false

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    try{
        const { email, password } = req.body

        let user = await UserModel.findOne({ email: email })
        if(!user){
            return res.status(400).json({
                success,
                message: "Invalid Credentials!"
            })
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password)
        if(!isPasswordMatched){
            return res.status(400).json({
                success,
                message: "Invalid Credentials!"
            })
        }

        const isVerified = user.verified
        if(!isVerified){
            let token = await TokenModel.findOne({ userId: user._id })
            if(token){
                return res.status(400).json({
                    success,
                    message: "An email sent to your mail id please verify"
                })
            }

            token = await TokenModel.create({
                userId: user._id,
                token: crypto.randomBytes(32).toString('hex')
            })
    
            const url = `${process.env.CLIENT_URL}/users/${user._id}/verify-email/${token.token}`
    
            sendEmail(user.email, "Email Verification", `Click on the link to verify your email: ${url}`)

            return res.status(400).json({
                success,
                message: "An email sent to your mail id please verify"
            })
        }

        const payload = {
            user: {
                id: user._id
            }
        }

        const authToken = jwt.sign(payload, process.env.JWT_SECRET)

        success = true
        res.status(200).json({ success, authToken, message: "Logged in successfully!" })
    }
    catch (error) {
        console.error(error.message)
        res.status(500).json({
            success,
            message: "Internal Server Error!"
        })   
    }
})

module.exports = router