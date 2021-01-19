const db = require('../database/dbConfing');

module.exports = {
	insertOrder,
	getOrderByID
};

async function insertOrder(data) {
	const [ orderId ] = await db('orders').insert(data, 'orders.order_id');
	return getOrderByID(orderId, data.user_id);
}

function getOrderByID(id, userid) {
	return db('orders')
		.select('orders.order_id', 'users.username')
		.join('users', 'orders.order_user_id', 'users.user_id')
		.where('orders.order_id', id);
}
