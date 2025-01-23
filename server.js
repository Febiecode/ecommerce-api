const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()
const app = express()
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// Import Routes
const productRoutes = require('./routes/productRoutes')
const cartRoutes = require('./routes/cartRoutes')

app.use('/product', productRoutes)
app.use('/cart', cartRoutes)


const PORT = 5000
app.listen(PORT, () => console.log(`Server runs on port ${PORT}`))