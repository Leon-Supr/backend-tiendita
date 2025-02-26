/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE customers RESTART IDENTITY CASCADE')
  await knex('customers').insert([
    {
      first_name: 'Leonardo',
      last_name: 'Arguello Loya',
      email: 'leonardo.arguello@loya.com',
      phone_number: '6231883300',
      address: 'Los Pinos 777',
      zip_code: '83240',
      city: 'Chihuahua'
    },
    { first_name: 'Juan', last_name: 'Pérez López', email: 'juan.perez@email.com', phone_number: '5551234567', address: 'Calle 1, Colonia Centro', zip_code: '12345', city: 'city de México' },
    { first_name: 'María', last_name: 'Gómez Ramírez', email: 'maria.gomez@email.com', phone_number: '5559876543', address: 'Calle 2, Colonia Norte', zip_code: '67890', city: 'Guadalajara' },
    { first_name: 'Carlos', last_name: 'Monterrey García', email: 'carlos.monterrey@email.com', phone_number: '5567891234', address: 'Avenida Reforma 456', zip_code: '54321', city: 'Monterrey' },
    { first_name: 'Fernanda', last_name: 'Torres Sánchez', email: 'fernanda.torres@email.com', phone_number: '5587654321', address: 'Calle Hidalgo 32', zip_code: '72000', city: 'Puebla' },
    { first_name: 'Eduardo', last_name: 'Méndez Salinas', email: 'eduardo.mendez@email.com', phone_number: '5571122334', address: 'Boulevard Kukulcán 100', zip_code: '77500', city: 'Cancún' },
    { first_name: 'Andrea', last_name: 'Domínguez Rojas', email: 'andrea.dominguez@email.com', phone_number: '5598765432', address: '5 de Mayo 89', zip_code: '50000', city: 'Toluca' },
    { first_name: 'Ricardo', last_name: 'Rojas Hernández', email: 'ricardo.rojas@email.com', phone_number: '5544332211', address: 'Zona Centro 14', zip_code: '22000', city: 'Tijuana' },
    { first_name: 'Sofía', last_name: 'Fernández Castro', email: 'sofia.fernandez@email.com', phone_number: '5556677889', address: 'Calle Insurgentes 777', zip_code: '21000', city: 'Mexicali' },
    { first_name: 'Jorge', last_name: 'Soto Medina', email: 'jorge.soto@email.com', phone_number: '5511223344', address: 'Malecón del Río 22', zip_code: '91700', city: 'Veracruz' },
    { first_name: 'Ana', last_name: 'Navarro Velázquez', email: 'ana.navarro@email.com', phone_number: '5533445566', address: 'Calle 60 Norte 456', zip_code: '97000', city: 'Mérida' },
    { first_name: 'Miguel', last_name: 'Reyes Ortega', email: 'miguel.reyes@email.com', phone_number: '5511882244', address: 'Avenida Hidalgo 67', zip_code: '20000', city: 'Aguascalientes' }
  ]);
};
