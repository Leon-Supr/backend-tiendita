/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE sales RESTART IDENTITY CASCADE')

  // Inserts seed entries
  await knex('sales').insert([
    { fk_customer_id: 1 },
    { fk_customer_id: 2 },
    { fk_customer_id: 3 },
    { fk_customer_id: 4 },
    { fk_customer_id: 5 },
    { fk_customer_id: 6 },
    { fk_customer_id: 7 },
    { fk_customer_id: 8 },
    { fk_customer_id: 9 },
    { fk_customer_id: 10 }
  ]);
};
