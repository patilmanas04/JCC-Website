require('dotenv').config()
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const UserModel = require('../models/User')
const TokenModel = require('../models/Token')
const sendEmail = require('../utils/sendEmail')
const fetchUserDetails = require('../middleware/fetchUserDetails')
const sendResetPasswordEmail = require('../utils/sendResetPasswordEmail')

// Regsiter a new user
router.post('/register', async (req, res) => {
    let success = false

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

        let token = await TokenModel.findOne({ userId: user._id })

        if(token){
            return res.status(400).json({
                success,
                message: "An email is already sent to your mail id please verify"
            })
        }

        token = await TokenModel.create({
            userId: user._id,
            token: crypto.randomBytes(32).toString('hex')
        })

        const url = `${process.env.CLIENT_URL}/users/${user._id}/verify-email/${token.token}`

        sendEmail(user.email, "Email Verification", url)

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
            return res.status(400).json({
                success,
                message: "Invalid Url!"
            })
        }

        user = await UserModel.updateOne({ _id: user._id }, { verified: true })

        success = true

        await TokenModel.deleteOne({ userId: req.params.id })

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
router.post('/login', async (req, res) => {
    let success = false
    let isAdmin = false

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
                    message: "An email is already sent to your mail id please verify"
                })
            }
            
            token = await TokenModel.create({
                userId: user._id,
                token: crypto.randomBytes(32).toString('hex')
            })

            const url = `${process.env.CLIENT_URL}/users/${user._id}/verify-email/${token.token}`
    
            sendEmail(user.email, "Email Verification", url)

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
router.put('/updateuser', fetchUserDetails, async(req, res) => {
    let success = false

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

router.get('/checkadmin', fetchUserDetails, async (req, res) => {
    let success = false

    try{
        const userId = req.user.id
        const userDetails = await UserModel.findOne({ _id: userId })

        if(userDetails.userType === 'admin'){
            success = true
            return res.status(200).json({ success })
        }
        else{
            return res.status(400).json({ success })
        }
    }
    catch(error){
        console.log(error.message)
        return res.status(500).json({
            success,
            message: "Internal Server Error!"
        })
    }
})

router.post('/forgotpassword', async (req, res) => {
    let success = false

    try{
        const { email } = req.body
        const user = await UserModel.findOne({ email: email })

        if(!user){
            return res.status(400).json({
                success,
                message: "User not found!"
            })
        }

        let token = await TokenModel.findOne({ userId: user._id })

        if(token){
            return res.status(400).json({ success, message: "An email is already sent to your mail to reset the password" })
        }

        token = await TokenModel.create({
            userId: user._id,
            token: crypto.randomBytes(32).toString('hex')
        })

        const url = `${process.env.CLIENT_URL}/users/${user._id}/reset-password/${token.token}`

        sendResetPasswordEmail(user.email, "Reset Password", url)

        success = true

        return res.status(200).json({ success, message: "An email sent to your mail to reset the password" })
    }
    catch(error){
        console.log(error.message)
        return res.status(500).json({
            success,
            message: "Internal Server Error!"
        })
    }
})

router.post('/users/:id/reset-password/:token', async(req, res) => {
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
            return res.status(400).json({
                success,
                message: "Invalid Url!"
            })
        }

        success = true

        return res.status(200).json({ success })
    }
    catch(error){
        console.log(error.message)
        return res.status(500).json({
            success,
            message: "Internal Server Error!"
        })
    }
})

router.put('/updatepassword', async(req, res) => {
    let success = false

    try{
        const { userId, password, resetToken } = req.body

        let token = await TokenModel.findOne({ userId: userId, token: resetToken })

        if(!token){
            return res.status(400).json({
                success,
                message: "Please request for a new password reset link!"
            })
        }

        let user = await UserModel.findOne({ _id: userId })

        if(!user){
            return res.status(400).json({
                success,
                message: "User not found!"
            })
        }

        const isSamePassword = await bcrypt.compare(password, user.password)

        if(isSamePassword){
            return res.status(400).json({
                success,
                message: "Please enter a new password!"
            })
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT_LENGTH))
        const hashedPassword = await bcrypt.hash(password, salt)

        user = await UserModel.updateOne({ _id: userId }, { password: hashedPassword })

        const deletedToken = await TokenModel.deleteOne({ userId: userId })
        console.log(deletedToken)

        success = true

        return res.status(200).json({ success, message: "Your password has been reset successfully. You can now log in with your new password." })
    }
    catch(error){
        console.log(error.message)
        return res.status(500).json({
            success,
            message: "Internal Server Error!"
        })
    }
})

module.exports = router