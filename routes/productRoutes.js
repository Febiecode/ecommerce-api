const express = require('express')
const {createProduct, getAllProduct, updateProduct, deleteProduct} = require('../controllers/productController')

const router = express.Router()

router.post('/add-product', createProduct)
router.get('/get-product', getAllProduct)
router.put('/update-product/:id', updateProduct)
router.delete('/delete-product/:id', deleteProduct)

module.exports = router