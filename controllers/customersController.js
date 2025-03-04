const ModelCustomer = require('../models/Customers')

const createCustomer = (req, res) => {
    ModelCustomer.create(req.body).then(customer => {
        res.status(201).json(customer)
    }).catch(error => {
        res.status(400).json({ message: message.error })
    })
}

const findAllCustomers = (req, res) => {
    ModelCustomer.findAll().then(customer => {
        res.status(200).json(customer)
    }).catch(error => {
        res.status(400).json({ message: message.error })
    })
}

module.exports = {
    createCustomer,
    findAllCustomers
}