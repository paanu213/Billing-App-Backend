const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({

    customerName:{
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    eventType: {
        type: String
    },
    eventStartDate: {
        type: Date
    },
    eventEndDate: {
        type: Date
    },
    eventAmount: {
        type: Number,
        required: true
    },
    eventDiscount: {
        type: Number
    },
    finalAmount: {
        type: Number
    },
    advancePaid: {
        type: Number
    },
    PendingAmount: {
        type: Number
    },
    finalAmountCleared:{
        type: Boolean
    },

})

module.exports = mongoose.model('Invoice', invoiceSchema)