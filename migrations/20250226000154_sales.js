/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('sales').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('sales', function (table) {
                table.increments('sale_id').primary().unique()
                table.timestamp('created_at').defaultTo(knex.fn.now())
                table.integer('fk_customer_id').unsigned().references('customers.customer_id')
                table.boolean('active').notNullable().defaultTo(true)
            })
        }
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.hasTable('sales').then(function (exists) {
        if (exists) {
            return knex.schema.dropTable('sales')
        }
    })
};
