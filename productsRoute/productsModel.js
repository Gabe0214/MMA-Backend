const db = require('../database/dbConfing');

module.exports = {
	getAllProducts,
	getProductByID,
	deleteProduct,
	insertProduct,
	updateProductByID
};

function getAllProducts(qry) {
	const knexQuery = db('products');
	if (qry.product_for) {
		knexQuery.where('product_for', `${qry.product_for}`);
	}

	if (qry.type) {
		knexQuery.where('type', `${qry.type}`);
	}
	return knexQuery.orderBy('product_id');
}

function deleteProduct(id) {
	return db('products as p').delete().where('p.product_id', id);
}

function getProductByID(id) {
	return db('products').where('products.product_id', id).orderBy('products.product_id').first();
}

function insertProduct(data) {
	return db('products').insert(data, 'products.product_id').then(([ id ]) => {
		return getProductByID(id);
	});
}

function updateProductByID(id, data) {
	return db('products as p').update(data).where('p.product_id', id).then(() => getProductByID(id));
}
