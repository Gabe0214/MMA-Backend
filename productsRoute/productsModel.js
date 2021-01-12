const db = require('../database/dbConfing');

module.exports = {
	getAllProducts,
	getProductByID,
	deleteProduct,
	insertProduct,
	updateProductByID,
	insertProductImage,
	filterProductsByQueryParams
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

function insertProductImage(data) {
	return db('product_images').insert(data, 'product_images.product_id').then(([ id ]) => {
		return getProductAndImagesByID(id);
	});
}

function filterProductsByQueryParams(qry) {
	const keys = Object.keys(qry);
	if (keys.length == 1) {
		return db('products as p')
			.join('product_images as images', 'images.product_id', 'p.product_id')
			.select(
				'images.product_id',
				'p.name',
				'p.brand',
				'p.type',
				'p.gender',
				'p.price',
				'p.description',
				'images.img_source_1',
				'images.image_source_2',
				'images.image_source_3'
			)
			.where(qry)
			.orderBy('p.product_id');
	} else {
		return db('products as p')
			.join('product_images as images', 'images.product_id', 'p.product_id')
			.select(
				'images.product_id',
				'p.name',
				'p.brand',
				'p.type',
				'p.gender',
				'p.price',
				'p.description',
				'images.img_source_1',
				'images.image_source_2',
				'images.image_source_3'
			)
			.where(keys[0], qry[keys[0]])
			.andWhere(keys[1], qry[keys[1]])
			.orderBy('p.product_id');
	}
}
