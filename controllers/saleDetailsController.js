const ModelSaleDetails = require('../models/SaleDetails')

const createSaleDetails = (req, res) => {
    ModelSaleDetails.create(req.body).then(saleDetails => {
        res.status(201).json(saleDetails)
    }).catch(error => {
        res.status(400).json({ message: error.message })
    })
}

const findAllSaleDetails = (req, res) => {
    ModelSaleDetails.findAll().then(salesDetails => {
        res.status(200).json(salesDetails)
    }).catch(error => {
        res.status(400).json({ message: error.message })
    })
}

const findOneSaleDetails = (req, res) => {
    ModelSaleDetails.findOne(req.params.saleDetailsId).then(saleDetails => {
        res.status(200).json(saleDetails)
    }).catch(error => {
        res.status(400).json({ message: error.message })
    })
}

const updateSaleDetails = (req, res) => {
    ModelSaleDetails.update(req.params.saleDetailsId, req.body).then(saleDetails => {
        res.status(200).json(saleDetails)
    }).catch(error => {
        res.status(400).json({ message: error.message })
    })
}

module.exports = {
    createSaleDetails,
    findAllSaleDetails,
    findOneSaleDetails,
    updateSaleDetails
}