const db = require('../database/dbConfing')

module.exports = {
    getAllProducts,
    getProductByID,
    getProductAndImagesByID,
    deleteProduct,
    upDateProduct,
    upDateProductImages,
    insertProduct,
    insertProductImage,
    filterProductsByQueryParams
}


function getAllProducts(){
    return db('products as p')
    .join('product_images as images', 'images.product_id', 'p.product_id')
    .select('images.product_id', 'p.name', 'p.brand', 'p.type', 'p.gender', 'p.price', 'p.description', 'images.img_source_1', 'images.image_source_2', 'images.image_source_3')
    .orderBy('images.product_id')
    
}

function getProductAndImagesByID(id){
    console.log(id)
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
   .then(res => getProductAndImagesByID(id)) 
}

function upDateProductImages(id, changes){
    return db('product_images')
    .update(changes)
    .where('product_images.product_id', id)
    .then(id => getProductByID(id))
}


function getProductByID(id){
    return db('products')
    .where('products.product_id', id)
    .orderBy('products.product_id')
    .first()

}

function insertProduct(data){
    return db('products')
    .insert(data, "products.product_id")
    .then(([id]) => {return getProductByID(id)})
}

function insertProductImage(data){
    return db('product_images')
    .insert(data, "product_images.product_id")
    .then(([id]) => { return getProductAndImagesByID(id)})
}

function filterProductsByQueryParams(qry){
    const keys = Object.keys(qry)
    if(keys.length == 1){
        return db('products as p')
        .join('product_images as images', 'images.product_id', 'p.product_id')
        .select('images.product_id', 'p.name', 'p.brand', 'p.type', 'p.gender', 'p.price', 'p.description', 'images.img_source_1', 'images.image_source_2', 'images.image_source_3')
        .where(qry)
        .orderBy('p.product_id')
    } else {
        return db('products as p')
        .join('product_images as images', 'images.product_id', 'p.product_id')
        .select('images.product_id', 'p.name', 'p.brand', 'p.type', 'p.gender', 'p.price', 'p.description', 'images.img_source_1', 'images.image_source_2', 'images.image_source_3')
        .where(keys[0], qry[keys[0]])
        .andWhere(keys[1], qry[keys[1]])
        .orderBy('p.product_id')
    }
}