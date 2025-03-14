const express = require('express')
const router = express.Router()

const saleDetailsController = require('../controllers/saleDetailsController')

router.post('/sale_details', saleDetailsController.createSaleDetails)
router.get('/sale_details', saleDetailsController.findAllSaleDetails)
router.get('/sale_details/:saleDetailsId', saleDetailsController.findOneSaleDetails)
router.patch('/sale_details/:saleDetailsId', saleDetailsController.updateSaleDetails)
router.delete('/sale_details/:saleDetailsId', saleDetailsController.softDeleteSaleDetails)
router.delete('/sale_details/destroy/:saleDetailsId', saleDetailsController.destroySaleDetails)

module.exports = router