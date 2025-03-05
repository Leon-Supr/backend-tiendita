const express = require('express')
const router = express.Router();

const salesController = require('../controllers/salesController')

router.post('/sales', salesController.createSale)
router.get('/sales', salesController.findAllSales)
router.get('/sales/:saleId', salesController.findOneSale)
router.patch('/sales/:saleId', salesController.updateSale)
router.delete('/sales/:saleId', salesController.softDeleteSale)
router.delete('/sales/destroy/:saleId', salesController.destroySale)

module.exports = router;