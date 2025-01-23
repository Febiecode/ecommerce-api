const Product = require('../models/Product')

exports.createProduct = async (req, res) => {
    try {
        const { name, price, description, image } = req.body;

        const newProduct = new Product({
            name,
            price,
            description,
            image
        })

        const savedProduct = await newProduct.save()

        res.status(201).json(
            {
                message: "Product created successfully",
                product: savedProduct
            }
        )
    } catch (err) {
        console.log(`Error creating product: ${err}`)
        res.status(500).json({ message: "Server Error. Please try again later." })
    }
}

exports.getAllProduct = async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, description, image } = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { name, price, description, image },
            { new: true, runValidators: true }
        )

        res.status(200).json({
            message: 'Product updated successfully.',
            product: updatedProduct,
        })
    } catch (err) {
        console.error(`Error updating product: ${err}`)
        res.status(500).json({
            message: "Server error. Please try again later."
        })
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const deleteProduct = await Product.findByIdAndDelete(id);
        res.status(200).json({ message: 'Product deleted successfully.', DeletedProduct: deleteProduct });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting product.' });
    }
}