const mongoose = require('mongoose')

const BuyoutOrder = new mongoose.Schema({
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
    autoName: {
        type: String,
        trim: true
    },
    model: {
        type: String,
        trim: true
    },
    marka: {
        type: String,
        trim: true
    },
    engine: {
        type: String,
        default: "diesel"
    },
    volume: {
        type: String,
        trim: true
    },
    transmission: {
        type: String,
        default: "automat"
    },
    year: {
        type: String,
        trim: true
    },
    mileage: {
        type: String,
        trim: true
    },
    cost: {
        type: String,
        trim: true
    },
    description: {
        type: String
    },
    images: {
        type: Array,
        default: []
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("BuyoutOrder", BuyoutOrder);
