const ModelSale = require('../models/Sales')

const createSale = (req, res) => {
    ModelSale.create(req.body).then(sale => {
        res.status(201).json(sale)
    }).catch(error => {
        res.status(400).json({ message: error.message })
    })
}

const findOneSale = (req, res) => {
    ModelSale.findOne(req.params.saleId).then(sale => {
        res.status(200).json(sale)
    }).catch(error => {
        res.status(400).json({ message: error.message })
    })
}

const findAllSales = (req, res) => {
    ModelSale.findAll().then(sale => {
        res.status(200).json(sale)
    }).catch(error => {
        res.status(400).json({ message: error.message })
    })
}

const updateSale = (req, res) => {
    ModelSale.update(req.params.saleId, req.body).then(sale => {
        res.status(200).json(sale)
    }).catch(error => {
        res.status(400).json({ message: error.message })
    })
}

const softDeleteSale = (req, res) => {
    ModelSale.softDelete(req.params.saleId).then(sale => {
        res.status(204).json(sale)
    }).catch(error => {
        res.status(400).json({ message: error.message })
    })
}

const destroySale = (req, res) => {
    ModelSale.destroy(req.params.saleId).then(sale => {
        res.status(204).json(sale)
    }).catch(error => {
        res.status(400).json({ message: error.message })
    })
}

module.exports = {
    createSale,
    findOneSale,
    findAllSales,
    updateSale,
    softDeleteSale,
    destroySale
}