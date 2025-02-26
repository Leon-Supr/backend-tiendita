exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('sales').del()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
        { customer_id: 1 },
        { customer_id: 2 },
        { customer_id: 3 },
        { customer_id: 4 },
        { customer_id: 5 },
        { customer_id: 6 },
        { customer_id: 7 },
        { customer_id: 8 },
        { customer_id: 9 },
        { customer_id: 10 }
      ]);
    });
};