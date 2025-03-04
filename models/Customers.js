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

module.exports = {
    create,
    findAll
}