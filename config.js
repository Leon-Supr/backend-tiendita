// Va a hacer uso de la configuración de base de datos
// dependiendo de la variable de entorno del sistema
// en que se ejecute el servidor, se cambiará la configuración de la
// base de datos. (development, production, staging, etc en knexfile.js)

// Tomar configuración de entorno de node, si no hay, usar default (development)
const ENV = process.env.NODE_ENV || 'development'

const knex = require('knex')
const knexfile = require('./knexfile')

// Mandar llamar a Knex con la configuración adecuada del entorno
module.exports = knex(knexfile[ENV])