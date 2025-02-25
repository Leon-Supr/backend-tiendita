/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('customers').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('customers', function (table) {
                table.increments('customer_id').primary().unique()
                table.string('first_name').notNullable()
                table.string('last_name').notNullable()
                table.string('email').notNullable().unique()
                table.string('phone_number')
                table.string('zip_code')
                table.string('city')
                table.timestamp('created_at').defaultTo(knex.fn.now())
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
    return knex.schema.hasTable('customers').then(function (exists) {
        if (exists) {
            return knex.schema.dropTable('customers')
        }
    })
};
