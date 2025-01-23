const Cart = require('../models/Cart')

exports.addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
  
    try {
      let cart = await Cart.findOne();
  
      if (!cart) {
        cart = new Cart({ products: [] });
      }
  
      const productIndex = cart.products.findIndex(p => p.product == productId);
  
      if (productIndex > -1) {
        cart.products[productIndex].quantity += quantity;
      } else {
        cart.products.push({ product: productId, quantity });
      }
  
      await cart.save();
      res.json({
        message: 'Product added to cart successfully!',
        cart,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  exports.getCart = async (req, res) => {
    try {
      const cart = await Cart.findOne().populate('products.product');
      res.json({
        message: 'Product fetched to cart successfully!',
        cart,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  exports.updateCartItem = async (req, res) => {
    const { quantity } = req.body;
  
    try {
      const cart = await Cart.findOne();
      const productIndex = cart.products.findIndex(p => p._id == req.params.id);
  
      if (productIndex > -1) {
        cart.products[productIndex].quantity = quantity;
      }
  
      await cart.save();
      res.json({
        message: 'Product updated to cart successfully!',
        cart,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };


  exports.deleteCartItem = async (req, res) => {
    try {
      const cart = await Cart.findOne();
      cart.products = cart.products.filter(p => p._id != req.params.id);
  
      await cart.save();
      res.json({
        message: 'Product deleted to cart successfully!',
        cart,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  exports.clearCart = async (req, res) => {
    try {
      const cart = await Cart.findOne();
      cart.products = [];
  
      await cart.save();
      res.json({
        message: 'Cart is cleared successfully!',
        cart,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };