const db = require('../database/dbConfing')

module.exports = {
    getAllProducts,
    getProductImages
}


function getAllProducts(){
    return db('products as p')
    .join('product_images as images', 'images.product_id', 'p.product_id')
    .select('images.product_id', 'p.name', 'images.img_source_1', 'images.image_source_2', 'images.image_source_3')
  
    
}

function getProductImages(productid){
  return db('product_images as images')
  .select('images.img_source')
  .where('images.product_id', '=', productid)
}