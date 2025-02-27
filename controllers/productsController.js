//Contiene la lógica de negocio de la aplicación

const ModelProduct = require('../models/Products')

//Create
const createProduct = (req, res) => { 
    ModelProduct.create(req.body).then(product => {
        res.status(201).json(product)
    }).catch(error => {
        res.status(400).json({message: error.message})
    })
}

module.exports = {
    createProduct
}