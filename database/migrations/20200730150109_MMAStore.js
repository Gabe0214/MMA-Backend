exports.up = function(knex, Promise) {
	return (
		knex.schema
			.createTable('products', (tbl) => {
				tbl.increments('product_id');

				tbl.string('name', 255).notNullable().unique();

				tbl.decimal('price').notNullable();

				tbl.string('type', 255).notNullable();

				tbl.string('product_for', 10);

				tbl.string('description', 700).notNullable();

				tbl.string('brand', 255).notNullable();
				tbl.string('image', 255).notNullable();
				tbl.string('image_2', 255);
				tbl.string('image_3', 255);
				tbl.string('color', 50).notNullable();
			})
			/* end of product table */

			// Users
			.createTable('users', (tbl) => {
				tbl.increments('user_id');

				tbl.string('firstname', 150).notNullable();
				tbl.string('lastname', 150).notNullable();
				tbl.string('username', 150).unique().notNullable();
				tbl.string('email', 150).unique().notNullable();
				tbl.string('password', 150).notNullable();
				tbl.integer('zip', 4).notNullable();
				tbl.string('city', 50).notNullable();
				tbl.string('state', 100).notNullable();
				tbl.string('adress', 100).notNullable();
				tbl.string('adress_2', 100);
			})
			//Orders

			.createTable('orders', (tbl) => {
				tbl.increments('order_id');
				tbl.integer('order_user_id').references('user_id').inTable('users').unsigned().notNullable();
				tbl.integer('total');
			})
			// OrderDetails

			.createTable('order_details', (tbl) => {
				tbl.increments('order_details_id');
				tbl.integer('order_details_order_id').references('order_id').inTable('orders').unsigned().notNullable();
				tbl.integer('order_details_product_id').references('product_id').inTable('products').unsigned().notNullable();

				tbl.integer('qty').notNullable();
				tbl.string('size', 20).notNullable();
				tbl.decimal('price').notNullable();
			})
	);
};

exports.down = function(knex, Promise) {
	return knex.schema
		.dropTableIfExists('order_details')
		.dropTableIfExists('orders')
		.dropTableIfExists('users')
		.dropTableIfExists('products');
};
