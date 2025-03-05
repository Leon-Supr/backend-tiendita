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
        .where('active', true)
        .returning('*')
}

const findAll = () => {
    return knex
        .select('*')
        .from('sales')
        .where('active', true)
        .returning('*')
}

const update = (saleId, bodyToUpdate) => {
    return knex
        .update(bodyToUpdate)
        .from('sales')
        .where('sale_id', saleId)
        .returning('*')
}

const softDelete = async (saleId) => {
    await knex
        .update({ active: false })
        .from('sale_details')
        .where('fk_sale_id', saleId)
    return knex
        .update({ active: false })
        .from('sales')
        .where('sale_id', saleId)
}

const destroy = async (saleId) => {
    await knex
        .delete()
        .from('sale_details')
        .where('fk_sale_id', saleId)
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