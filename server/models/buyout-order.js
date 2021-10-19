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
        required: true,
        minlength: 1,
        trim: true
    },
    year: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    mileage: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    cost: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    description: {
        type: String
    },
    airConditioning: {
        type: Boolean,
        default: false
    },
    leatherInterior: {
        type: Boolean,
        default: false
    },
    alloyWheels: {
        type: Boolean,
        default: false
    },
    xenon: {
        type: Boolean,
        default: false
    },
    speakerphone: {
        type: Boolean,
        default: false
    },
    parktronic: {
        type: Boolean,
        default: false
    },
    heatedSeats: {
        type: Boolean,
        default: false
    },
    stabilityControlSystem: {
        type: Boolean,
        default: false
    },
    navigation: {
        type: Boolean,
        default: false
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
