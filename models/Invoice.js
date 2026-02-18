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
        type: Number,
        default: 0
    },
    finalAmount: {
        type: Number
    },
    advancePaid: {
        type: Number,
        default: 0
    },
    pendingAmount: {
        type: Number
    },
    finalAmountCleared:{
        type: Boolean,
        default: false
    },

})

invoiceSchema.methods.calculateAmounts = function () {
    this.finalAmount = this.eventAmount - this.eventDiscount
    this.pendingAmount = this.finalAmount - this.advancePaid
    this.finalAmountCleared = this.pendingAmount <= 0
}

module.exports = mongoose.model('Invoice', invoiceSchema)