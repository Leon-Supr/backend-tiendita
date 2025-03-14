// MODELO - Interactua con la base de datos
// NO VALIDA DATOS O RESOLVER PROMESAS (eso es del controlador)

const knex = require('../config')

// CRUD base

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

// Update
const update = (productId, bodyToUpdate) => {
    return knex
        .update(bodyToUpdate)
        .from('products')
        .where('product_id', productId)
        .returning('*')
}

//Soft delete
const softDelete = (productId) => {
    return knex
        .update({ active: false })
        .from('products')
        .where('product_id', productId)
}

//Hard delete
const destroy = (productId) => {
    return knex
        .delete()
        .from('products')
        .where('product_id', productId)
}

// Exportar las funciones que se crearon
module.exports = {
    create,
    findAll,
    findOne,
    update,
    softDelete,
    destroy
}