const db = require('../database/dbConfing')

module.exports = {
    getAllProducts,
}


function getAllProducts(){
    return db('products as p')
    .join('product_images as images', 'images.product_id', 'p.product_id')
    .select('images.product_id', 'p.name', 'p.brand', 'p.type', 'p.gender', 'p.price', 'p.description', 'images.img_source_1', 'images.image_source_2', 'images.image_source_3')
    .orderBy('images.product_id')
    
}

