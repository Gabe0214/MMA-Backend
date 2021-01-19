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

module.exports = router;
