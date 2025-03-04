const ModelCustomer = require('../models/Customers')

const createCustomer = (req, res) => {
    ModelCustomer.create(req.body).then(customer => {
        res.status(201).json(customer)
    }).catch(error => {
        res.status(400).json({ message: erro.message })
    })
}

const findAllCustomers = (req, res) => {
    ModelCustomer.findAll().then(customers => {
        res.status(200).json(customers)
    }).catch(error => {
        res.status(400).json({ message: error.message })
    })
}

const findOneCustomer = (req, res) => {
    ModelCustomer.findOne(req.params.customerId).then(customer => {
        res.status(200).json(customer)
    }).catch(error => {
        res.status(400).json({ message: error.message })
    })
}

const updateCustomer = (req, res) => {
    ModelCustomer.update(req.params.customerId, req.body).then(customer => {
        res.status(200).json(customer)
    }).catch(error => {
        res.status(400).json({ message: error.message })
    })
}

const softDeleteCustomer = (req, res) => {
    ModelCustomer.softDelete(req.params.customerId).then(customer => {
        res.status(204).json(customer)
    }).catch(error => {
        res.status(400).json({ message: error.message })
    })
}

module.exports = {
    createCustomer,
    findAllCustomers,
    findOneCustomer,
    updateCustomer,
    softDeleteCustomer
}