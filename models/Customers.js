const knex = require('../config')

const create = (bodyCustomer) => {
    return knex
        .insert(bodyCustomer)
        .into('customers')
        .returning('*')
}

const findAll = () => {
    return knex
        .select('*')
        .from('customers')
        .where('active', true)
}

const findOne = (customerId) => {
    return knex
        .select('*')
        .from('customers')
        .where('customer_id', customerId)
        .where('active', true)
}

const update = (customerId, bodyToUpdate) => {
    return knex
        .update(bodyToUpdate)
        .from('customers')
        .where('customer_id', customerId)
        .returning('*')
}

const softDelete = (customerId) => {
    return knex
        .update({ active: false })
        .from('customers')
        .where('customer_id', customerId)
}

const destroy = (customerId) => {
    return knex
        .delete()
        .from('customers')
        .where('customer_id', customerId)
}

module.exports = {
    create,
    findAll,
    findOne,
    update,
    softDelete,
    destroy
}