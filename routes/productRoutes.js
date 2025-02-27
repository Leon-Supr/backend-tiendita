const express = require('express')
const router = express.Router()

const productsController = require('../controllers/productsController')

router.post('/products', productsController.createProduct)
router.get('/products', productsController.findAllProducts)
router.get('/products/:productId', productsController.findOneProduct)
router.patch('/products/:productId', productsController.updateProduct)

module.exports = router