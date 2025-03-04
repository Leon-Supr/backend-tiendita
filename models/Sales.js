const knex = require('../config')

const create = (bodySales) => {
    return knex
        .insert(bodySales)
        .into('sales')
        .returning('*')
}

module.exports = {
    create
}