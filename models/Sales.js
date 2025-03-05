const knex = require('../config')

const create = (bodySales) => {
    return knex
        .insert(bodySales)
        .into('sales')
        .returning('*')
}


const findOne = (saleId) => {
    return knex
        .select('*')
        .from('sales')
        .where('sale_id', saleId)
        .where('active', active)
        .returning('*')
}

const findAll = () => {
    return knex
        .select('*')
        .from('sales')
        .where('sale_id', saleId)
        .where('active', active)
        .returning('*')
}

const update = (bodySales, saleId) => {
    return knex
        .update(bodySales)
        .from('sales')
        .where('sale_id', saleId)
        .returning('*')
}

const softDelete = (saleId) => {
    return knex
        .update({ active: false })
        .from('sales')
        .where('sale_id', saleId)
}

const destroy = (saleId) => {
    return knex
        .delete()
        .from('sales')
        .where('sale_id', saleId)
}

module.exports = {
    create,
    findOne,
    findAll,
    update,
    softDelete,
    destroy
}