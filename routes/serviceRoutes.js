const express = require('express')
const router = express.Router()
const serviceController = require('../controllers/serviceController')
const service = require('../models/Service')


router.post('/add-service', serviceController.createService)
router.get('/services-list', serviceController.getServices)

module.exports = router
