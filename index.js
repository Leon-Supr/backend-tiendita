// Modelo vista controlador

//#1 Importar express
const express = require('express')
const productRoutes = require('./routes/productRoutes')
const customerRoutes = require('./routes/customersRoutes')
const salesRoutes = require('./routes/salesRoutes')

const PORT = process.env.PORT || 3000

//#2 Crear aplicación/instancia de express
const app = express()

//#3 Configurar express para que entienda JSON
app.use(express.json())

//#4 Crear las rutas de la aplicación
app.use('/api/v1', productRoutes)
app.use('/api/v1', customerRoutes)
app.use('/api/v1', salesRoutes)

//#5 Levantar el servidor
app.listen(PORT, ()=>{
    console.log('Server is running mi loco');
})