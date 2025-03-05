const ModelSaleDetails = require('../models/SaleDetails')

const createSaleDetails = (req, res) => {
    ModelSaleDetails.create(req.body).then(saleDetails => {
        res.status(201).json(saleDetails)
    }).catch(error => {
        res.status(400).json({ message: error.message })
    })
}

module.exports = {
    createSaleDetails
}