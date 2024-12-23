const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tokenSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 900 // 15 minutes in seconds
    }
})

const TokenModel = mongoose.model('Token', tokenSchema)
module.exports = TokenModel