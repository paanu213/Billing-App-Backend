const express = require('express')
const invoiceController = require('../controllers/invoiceController')
const invoice = require('../models/Invoice')
const router = express.Router()

router.post('/create-invoice', invoiceController.createInvoice)

module.exports = router