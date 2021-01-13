const products = require('../productsRoute/productsModel');

function validateFields(req, res, next) {
	const { name, price, type, product_for, description, brand, image, color } = req.body;

	if (name == '' || !name) {
		res.status(401).json({ message: 'name field is required' });
	}

	if (price == '' || !price) {
		res.status(401).json({ message: 'price field is required' });
	}

	if (type == '' || !type) {
		res.status(401).json({ message: 'type field is required' });
	}

	if (product_for == '' || !product_for) {
		res.status(401).json({ message: 'product_for field is required' });
	}

	if (description == '' || !description) {
		res.status(401).json({ message: 'description field is required' });
	}

	if (brand == '' || !brand) {
		res.status(401).json({ message: 'brand field is required' });
	}

	if (image == '' || !image) {
		res.status(401).json({ message: 'image field is required' });
	}

	if (color == '' || !color) {
		res.status(401).json({ message: 'color field is required' });
	}

	next();
	return;
}

async function validateProductId(req, res, next) {
	const { id } = req.params;
	const product = await products.getProductByID(id);
	console.log(product);
	if (product) {
		next();
	} else {
		res.status(404).json({ message: 'id does not exist' });
	}
}

module.exports = {
	validateFields,
	validateProductId
};
