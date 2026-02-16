const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    //service name, price

    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        rewuired: true
    }
})

module.exports = mongoose.model('service', serviceSchema)