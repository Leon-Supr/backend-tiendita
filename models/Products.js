// MODELO - Interactua con la base de datos
// NO VALIDA DATOS O RESOLVER PROMESAS (eso es del controlador)

const knex = require('../config')

// CRUD

// Create
const create = (bodyProduct) => {
    return knex
        .insert(bodyProduct)
        .into('products')
        .returning('*')
}

// Read
const findAll = () => {
    return knex
        .select('*')
        .from('products')
        .where('active', true)
}

const findOne = (productId) => {
    return knex
        .select('*')
        .from('products')
        .where('product_id', productId) //Donde tenga el id
        .where('active', true)
}

// Exportar las funciones que se crearon
module.exports = {
    create,
    findAll,
    findOne
}