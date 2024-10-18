require('dotenv').config()
const express = require('express')
const fetchUserDetails = require('../middleware/fetchUserDetails')
const UserModel = require('../models/User')
const router = express.Router()

router.get('/getallusers', fetchUserDetails, async (req, res) => {
    let success = false

    try{
        const userId = req.user.id
        const userDetails = await UserModel.findOne({ _id: userId}, { password: 0, verified: 0, __v: 0, _id: 0, date: 0 })
        
        console.log(userDetails)

        if(userDetails.userType === 'admin'){
            const allUsersDetails = await UserModel.find({ userType: 'user' }, { password: 0, verified: 0, __v: 0 })

            success = true
            return res.status(200).json({ success, allUsersDetails })
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