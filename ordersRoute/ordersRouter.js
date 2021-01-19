const express = require('express');

const router = express.Router();
const orders = require('./ordersModel');

router.post('/order', async (req, res) => {
	const { order_user_id, total } = req.body;

	try {
		const order = await orders.insertOrder({ order_user_id, total });
		res.status(201).json(order);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.post('/order/order_detail', async (req, res) => {
	const { order_details_product_id, order_details_order_id, qty, size, price } = req.body;

	try {
		const recoredOrderDetail = await orders.insertOrderDetails({
			order_details_order_id,
			order_details_product_id,
			qty,
			size,
			price
		});
		res.status(201).json(recoredOrderDetail);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'something went wrong in the server' });
	}
});

module.exports = router;
