const user = {
	id: 5
};

const basket = [
	{
		id: 8,
		name: 'shirt',
		size: 'M',
		qty: 1,
		price: 10.0
	},
	{
		id: 8,
		name: 'shirt',
		size: 'L',
		qty: 1,
		price: 10.0
	}
];

const placeOrder = (items) => {
	let total = 0;
	items.reduce((acc, item) => {
		return (total += item.price);
	}, total);

	axios
		.post(`https://localhost:8000/order/${user.id}`, total)
		.then((res) => {
			return res.data;
		})
		.then((order) => {
			items.map((item) => {
				axios
					.post(`https://localhost:8000/orders/orderDetails/`, {
						order_id: order.order_id,
						product_id: item.product_id,
						qty: item.qty,
						price: item.price,
						size: item.size
					})
					.then((res) => {
						return { message: 'item recorded' };
					})
					.catch((err) => console.log(err));
			});
		});
};

console.log(placeOrder(basket));
