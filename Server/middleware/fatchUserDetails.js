require('dotenv').config()
const jwt = require('jsonwebtoken')

const fetchUserDetails = (req, res, next) => {
    const success = false

    const token = req.header('Auth-Token')
    if(!token){
        return res.status(401).json({ success, message: "Please Authenticate using a valid token" })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded.user
        next()
    }
    catch(error){
        return res.status(401).json({ success, message: "Please Authenticate using a valid token" })
    }
}

module.exports = fetchUserDetails