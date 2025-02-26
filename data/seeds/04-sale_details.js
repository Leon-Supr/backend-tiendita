/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE sale_details RESTART IDENTITY CASCADE')
  // Inserts seed entries
  await knex('sale_details').insert([
    { fk_sale_id: 1, fk_product_id: 1, quantity: 2, subtotal: 51.00 },
    { fk_sale_id: 1, fk_product_id: 3, quantity: 1, subtotal: 45.00 },
    { fk_sale_id: 2, fk_product_id: 2, quantity: 3, subtotal: 90.00 },
    { fk_sale_id: 2, fk_product_id: 4, quantity: 2, subtotal: 45.50 },
    { fk_sale_id: 3, fk_product_id: 4, quantity: 2, subtotal: 45.50 },
    { fk_sale_id: 4, fk_product_id: 5, quantity: 1, subtotal: 12.00 },
    { fk_sale_id: 4, fk_product_id: 6, quantity: 2, subtotal: 44.00 },
    { fk_sale_id: 4, fk_product_id: 7, quantity: 3, subtotal: 73.50 },
    { fk_sale_id: 5, fk_product_id: 8, quantity: 1, subtotal: 50.00 },
    { fk_sale_id: 5, fk_product_id: 9, quantity: 2, subtotal: 90.00 },
    { fk_sale_id: 5, fk_product_id: 10, quantity: 1, subtotal: 70.00 },
    { fk_sale_id: 6, fk_product_id: 11, quantity: 4, subtotal: 80.00 },
    { fk_sale_id: 7, fk_product_id: 12, quantity: 2, subtotal: 30.00 },
    { fk_sale_id: 8, fk_product_id: 13, quantity: 3, subtotal: 126.00 },
    { fk_sale_id: 9, fk_product_id: 14, quantity: 1, subtotal: 38.00 },
    { fk_sale_id: 10, fk_product_id: 15, quantity: 2, subtotal: 190.00 }
  ]);
};
