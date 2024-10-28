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
const fetchUserDetails = require('../middleware/fetchUserDetails')

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
        return res.status(400).json({ success, message: "First Name, Last Name, Email and Password should not be empty" })
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
    let isAdmin = false

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ success, message: "Email and Password should not be empty" })
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
            if(!token){
                token = await TokenModel.create({
                    userId: user._id,
                    token: crypto.randomBytes(32).toString('hex')
                })
            }
    
            const url = `${process.env.CLIENT_URL}/users/${user._id}/verify-email/${token.token}`
    
            sendEmail(user.email, "Email Verification", `Click on the link to verify your email: ${url}`)

            return res.status(400).json({
                success,
                message: "An email sent to your mail id please verify"
            })
        }

        if(user.userType === 'admin'){
            isAdmin = true
        }

        const payload = {
            user: {
                id: user._id
            }
        }

        const authToken = jwt.sign(payload, process.env.JWT_SECRET)

        success = true
        res.status(200).json({ success, authToken, isAdmin, message: "Logged in successfully!" })
    }
    catch (error) {
        console.error(error.message)
        res.status(500).json({
            success,
            message: "Internal Server Error!"
        })   
    }
})

// Get user details from auth token
router.get('/getuser', fetchUserDetails, async(req, res) => {
    let success = false

    try{
        const userId = req.user.id
        const userDetails = await UserModel.findOne({ _id: userId }, { password: 0, verified: 0, __v: 0, _id: 0, date: 0 })

        success = true
        return res.status(200).json({ success, userDetails })
    }
    catch(error){
        console.error(error.message)
        return res.status(500).json({
            success,
            message: "Internal Server Error!"
        })
    }
})

// Update user details
router.put('/updateuser', fetchUserDetails, [
    body('firstName', 'First Name is required').notEmpty().isLength({ min: 1 }),
    body('lastName', 'Last Name is required').notEmpty().isLength({ min: 1 })
], async(req, res) => {
    let success = false

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ success, message: "First Name and Last Name should not be empty" })
    }

    try{
        const userId = req.user.id
        const { firstName, lastName } = req.body

        const newUserDetails = await UserModel.updateOne({ _id: userId }, { firstName, lastName })

        success = true
        return res.status(200).json({ success, message: "Details updated successfully!", newUserDetails })
    }
    catch(error){
        console.error(error.message)
        return res.status(500).json({
            success,
            message: "Internal Server Error!"
        })
    }
})

// Delete the user with user id
router.delete('/deleteuser', fetchUserDetails, async(req, res) => {
    let success = false

    try{
        const adminId = req.user.id
        const adminDetails = await UserModel.findOne({ _id: adminId }, { password: 0, verified: 0, __v: 0, _id: 0, date: 0 })
    
        if(adminDetails.userType === 'admin'){
            const userId = req.body.userId
            const user = await UserModel.findOne({ _id: userId })

            if(!user){
                return res.status(400).json({
                    success,
                    message: "User not found!"
                })
            }

            const deleteUser = await UserModel.deleteOne({ _id: userId})

            success = true

            return res.status(200).json({ success, message: "User deleted successfully!" })
        }
    }
    catch(error){
        console.error(error.message)
        return res.status(500).json({
            success,
            message: "Internal Server Error!"
        })
    }
})

module.exports = router