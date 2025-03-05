const knex = require('../config');

const create = async (saleDetailsBody) => {
    try {
        const saleDetailsWithSubtotal = await Promise.all(
            saleDetailsBody.map(async (item) => {
                const product = await knex
                    .select('price')
                    .from('products')
                    .where('product_id', item.fk_product_id)
                    .first()

                if (!product) {
                    throw new Error(`El producto con ID ${item.fk_product_id} no existe.`);
                }

                const price = parseFloat(product.price);

                return {
                    ...item,
                    subtotal: item.quantity * price
                };
            })
        );

        return await knex('sale_details')
            .insert(saleDetailsWithSubtotal)
            .returning('*');

    } catch (error) {
        throw error;
    }
};

module.exports = {
    create
};
