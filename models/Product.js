const mongoose = require('mongoose')

const productShema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    image:{
        type: String,
        require: true
    }
})

const Product = mongoose.model('Product', productShema)

module.exports = Product