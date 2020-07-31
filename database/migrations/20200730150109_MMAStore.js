
exports.up = function(knex, Promise) {
  return (
    knex.schema
        .createTable('products', tbl => {
            tbl.increments('product_id');

            tbl.string('name', 255)
            .notNullable()
            .unique()

            tbl.decimal('price')
            .notNullable()

            tbl.string('type', 255)
            .notNullable()

            tbl.string('gender', 6)
            
            tbl.string('description', 500)
            .notNullable()

            tbl.string('brand', 255)
            .notNullable()
        })
        /* end of product table */

        // product images 

       .createTable('product_images', tbl => {
           tbl.increments('product_image_id')
           tbl  
            .integer('product_id')
            .references('product_id')
            .inTable('products')
            .unsigned()
            .notNullable()
            .onUpdate('CASCADE')
            .onDelete('CASCADE')

          tbl.string('img_source', 500)
            .notNullable()
            .unique()
       })
    
  )
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('product_images')
    .dropTableIfExists('products')
};
