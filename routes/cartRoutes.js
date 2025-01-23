const express = require('express');

const {addToCart, getCart, updateCartItem, deleteCartItem, clearCart} = require('../controllers/cartController')

const router = express.Router();

router.post('/add-cart', addToCart);
router.get('/get-cart', getCart);
router.put('/update-cart/:id', updateCartItem);
router.delete('/delete-cart/:id', deleteCartItem);
router.delete('/clear-cart', clearCart);

module.exports = router;