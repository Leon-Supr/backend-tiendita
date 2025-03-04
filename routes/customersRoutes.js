const express = require('express')
const router = express.Router();

const customersController = require('../controllers/customersController')

router.post('/customers', customersController.createCustomer)
router.get('/customers', customersController.findAllCustomers)
router.get('/customers/:customerId', customersController.findOneCustomer)
router.patch('/customers/:customerId', customersController.updateCustomer)

module.exports = router