/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('sale_details').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('sale_details', function (table) {
                table.increments('sale_details_id').primary().unique()
                table.integer('fk_sale_id').unsigned().references('sales.sale_id')
                table.integer('fk_product_id').unsigned().references('products.product_id')
                table.integer('quantity').notNullable()
                table.decimal('subtotal').notNullable()
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
    return knex.schema.hasTable('sale_details').then(function (exists) {
        if (exists) {
            return knex.schema.dropTable('sale_details')
        }
    })
};
