const express = require('express');
const products = require('./productsModel');
const { validateFields, validateProductId } = require('../middleware/productsMiddleware');
const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const { product_for, type } = req.query;
		const allProducts = await products.getAllProducts({ product_for, type });

		res.status(200).json(allProducts);
	} catch (err) {
		console.log(err);
	}
});

router.get('/:id', validateProductId, async (req, res) => {
	const productId = req.params.id;

	try {
		const product = await products.getProductByID(productId);

		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: 'something went wrong in the server' });
	}
});

// DELETE product

router.delete('/:id', validateProductId, async (req, res) => {
	try {
		const deleteProduct = await products.deleteProduct(req.params.id);
		res.status(200).json({ message: 'Product deleted' });
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'something went wrong with the server' });
	}
});

// Update a product

router.put('/:id', validateProductId, async (req, res) => {
	try {
		const id = req.params.id;
		const data = req.body;
		const upDatedProduct = await products.updateProductByID(id, data);
		res.status(200).json(upDatedProduct);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'something went wrong with the server' });
	}
});

// insert a product

router.post('/', validateFields, async (req, res) => {
	try {
		const data = req.body;
		const product = await products.insertProduct(data);
		res.status(200).json(product);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'error something went wrong in the server' });
	}
});

// post product images

module.exports = router;
