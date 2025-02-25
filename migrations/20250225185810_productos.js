/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('products').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('products', function (table) {
                table.increments('product_id').primary().unique()
                table.string('name').notNullable()
                table.text('description')
                table.decimal('price').notNullable()
                table.string('sku').notNullable().unique()
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
    return knex.schema.hasTable('products').then(function (exists) {
        if (exists) {
            return knex.schema.dropTable('products')
        }
    })
};
