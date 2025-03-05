const express = require('express')
const router = express.Router()

const saleDetailsController = require('../controllers/saleDetailsController')

router.post('/sale_details', saleDetailsController.createSaleDetails)

module.exports = router