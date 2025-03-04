//Contiene la lógica de negocio de la aplicación

const ModelProduct = require('../models/Products')

//Create
const createProduct = (req, res) => {
    ModelProduct.create(req.body).then(product => {
        res.status(201).json(product)
    }).catch(error => {
        res.status(400).json({ message: error.message })
    })
}

//Read
const findAllProducts = (req, res) => {
    ModelProduct.findAll().then(products => {
        res.status(200).json(products)
    }).catch(error => {
        res.status(400).json({ message: error.message })
    })
}

const findOneProduct = (req, res) => {
    ModelProduct.findOne(req.params.productId).then(product => {
        res.status(200).json(product)
    }).catch(error => {
        res.status(400).json({ message: error.message })
    })
}

// Update
const updateProduct = (req, res) => {
    ModelProduct.update(req.params.productId, req.body).then(product => {
        res.status(200).json(product)
    }).catch(error => {
        res.status(400).json({ message: error.message })
    })
}

//Soft delete
const softDeleteProduct = (req, res) => {
    ModelProduct.softDelete(req.params.productId).then(product => {
        res.status(204).json(product)
    }).catch(error => {
        res.status(400).json({ message: error.message })
    })
}

//Hard delete
const destroyProduct = (req, res) => {
    ModelProduct.destroy(req.params.productId).then(product => {
        res.status(200).json(product)
    }).catch(error => {
        res.status(400).json({ message: error.message })
    })
}

module.exports = {
    createProduct,
    findAllProducts,
    findOneProduct,
    updateProduct,
    softDeleteProduct,
    destroyProduct
}