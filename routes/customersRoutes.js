const express = require('express')
const router = express.Router();

const customersController = require('../controllers/customersController')

router.post('/customers', customersController.createCustomer)
router.get('/customers', customersController.findAllCustomers)

module.exports = router