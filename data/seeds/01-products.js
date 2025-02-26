/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  //await knex('productos').del();
  await knex.raw('TRUNCATE products RESTART IDENTITY CASCADE')
  await knex('products').insert([
    {
      name: 'Arroz',
      description: 'Arroz blanco de grano largo 1kg',
      price: 28.50,
      sku: 'ARROZ001'
    },
    { name: 'Frijoles', description: 'Frijol negro en bolsa de 1kg', price: 35.00, sku: 'FRIJOL001' },
    { name: 'Aceite', description: 'Aceite vegetal 1L', price: 50.00, sku: 'ACEITE001' },
    { name: 'Azúcar', description: 'Azúcar refinada 1kg', price: 27.00, sku: 'AZUCAR001' },
    { name: 'Sal', description: 'Sal de mesa yodada 1kg', price: 12.00, sku: 'SAL001' },
    { name: 'Harina', description: 'Harina de trigo 1kg', price: 22.00, sku: 'HARINA001' },
    { name: 'Leche', description: 'Leche entera 1L', price: 24.50, sku: 'LECHE001' },
    { name: 'Huevos', description: 'Cartón de 12 huevos', price: 50.00, sku: 'HUEVOS001' },
    { name: 'Pan Bimbo', description: 'Pan de caja grande', price: 45.00, sku: 'PANBIM001' },
    { name: 'Cereal', description: 'Cereal de maíz 500g', price: 70.00, sku: 'CEREAL001' },
    { name: 'Atún', description: 'Lata de atún en agua 140g', price: 20.00, sku: 'ATUN001' },
    { name: 'Jabón', description: 'Jabón de baño 125g', price: 15.00, sku: 'JABON001' },
    { name: 'Papel Higiénico', description: 'Rollo doble hoja (4 piezas)', price: 42.00, sku: 'PAPEL001' },
    { name: 'Refresco', description: 'Refresco de cola 2L', price: 38.00, sku: 'REFRES001' },
    { name: 'Café', description: 'Café soluble 200g', price: 95.00, sku: 'CAFE001' },
    { name: 'Azúcar Morena', description: 'Azúcar morena 1kg', price: 30.00, sku: 'AZUMOR001' },
    { name: 'Galletas', description: 'Galletas de chocolate 300g', price: 35.00, sku: 'GALLE001' },
    { name: 'Mayonesa', description: 'Frasco de mayonesa 500g', price: 48.00, sku: 'MAYO001' },
    { name: 'Catsup', description: 'Salsa de tomate 500g', price: 37.00, sku: 'CATSUP001' },
    { name: 'Queso', description: 'Queso manchego 400g', price: 110.00, sku: 'QUESO001' }
  ]);
};
