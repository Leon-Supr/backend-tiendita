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

module.exports = {
    create,
    findAll,
    findOne,
    update
}