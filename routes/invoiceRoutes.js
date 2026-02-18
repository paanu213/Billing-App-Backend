const express = require('express')
const invoiceController = require('../controllers/invoiceController')
const router = express.Router()

router.post('/create-invoice', invoiceController.createInvoice)
router.get('/invoice-list', invoiceController.getInvoice)

module.exports = router