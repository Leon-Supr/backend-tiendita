/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.alterTable('sales', function (table) {
        table.dropColumn('fk_customer');
        table.string('fk_customer_id');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.hasColumn('sales').then(function (exists) {
        if (exists) {
            return knex.schema.alterTable('sales', function (table) {
                table.dropColumn('fk_customer_id');
                table.string('fk_customer');
            });
        }
    })
};
