const mongoose = require('mongoose')

const SelectionOrder = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId
    },
    phoneNumber: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
      },
    userName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    purpose: {
        type: String,
        default: "Разовый осмотр"    
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("SelectionOrder", SelectionOrder);
