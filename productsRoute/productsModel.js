const db = require('../database/dbConfing')

module.exports = {
    getAllProducts,
    getProductByID,
    deleteProduct,
    upDateProduct,
    upDateProductImages,
    insertProduct
}


function getAllProducts(){
    return db('products as p')
    .join('product_images as images', 'images.product_id', 'p.product_id')
    .select('images.product_id', 'p.name', 'p.brand', 'p.type', 'p.gender', 'p.price', 'p.description', 'images.img_source_1', 'images.image_source_2', 'images.image_source_3')
    .orderBy('images.product_id')
    
}

function getProductByID(id){
  return db('products as p')
    .join('product_images as images', 'images.product_id', 'p.product_id')
    .select('images.product_id', 'p.name', 'p.brand', 'p.type', 'p.gender', 'p.price', 'p.description', 'images.img_source_1', 'images.image_source_2', 'images.image_source_3')
    .orderBy('images.product_id')
    .where('images.product_id', id)
    .first()
}

function deleteProduct(id){
    return db('products as p')
    .delete().where('p.product_id', id)
}

function upDateProduct(id, changes){
    return db('products')
   .update(changes)
   .where('products.product_id', id)
   .then(id => getProductByID(id)) 
}

function upDateProductImages(id, changes){
    return db('product_images')
    .update(changes)
    .where('product_images.product_id', id)
    .then(id => getProductByID(id))
}

function insertProduct(data){
    return db('products')
    .insert(data, "products.product_id")
    .then(([id]) => getProductByID(id))
}