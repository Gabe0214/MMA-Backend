const db = require('../database/dbConfing');

module.exports = {
	insertOrder,
	getOrderByID,
	insertOrderDetails,
	getOrderDetailsById
};

async function insertOrder(data) {
	const [ orderId ] = await db('orders').insert(data, 'orders.order_id');
	return getOrderByID(orderId);
}

function getOrderByID(id) {
	return db('orders')
		.select('orders.order_id', 'users.username')
		.join('users', 'orders.order_user_id', 'users.user_id')
		.where('orders.order_id', id);
}

async function insertOrderDetails(data) {
	const [ orderDetailsID ] = await db('order_details').insert(data, 'order_details.order_details_id');
	return getOrderDetailsById(orderDetailsID);
}

function getOrderDetailsById(id) {
	return db('order_details')
		.select('orders.order_id', 'products.name', 'products.price', 'qty', 'size')
		.join('orders', 'order_details.order_details_order_id', 'orders.order_id')
		.join('products', 'order_details.order_details_product_id', 'products.product_id')
		.from('products')
		.where('order_details.order_details_id', id)
		.from('order_details');
}
