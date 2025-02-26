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

// Exportar las funciones que se crearon
module.exports = {
    create
}