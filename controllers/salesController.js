const ModelSale = require('../models/Sales')

const createSale = (req, res) => {
    ModelSale.create(req.body).then(sale => {
        res.status(201).json(sale)
    }).catch(error => {
        res.status(400).json({ message: erro.message })
    })
}

module.exports = {
    createSale
}