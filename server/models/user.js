const mongoose = require('mongoose')

const User = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId
    },
    userName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model("User", User)