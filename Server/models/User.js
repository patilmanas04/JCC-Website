const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    userType:{
        type: String,
        default: 'user'
    },
    verified: {
        type: Boolean,
        default: false
    }
})

const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel