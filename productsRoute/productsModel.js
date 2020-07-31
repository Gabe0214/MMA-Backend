const db = require('../database/dbConfing')

module.exports = {
    getAllProducts,
    getProductImages
}


function getAllProducts(){
    return db('products').orderBy('product_id')
}

function getProductImages(productid){
  return db('product_images as images')
  .select('images.img_source')
  .where('images.product_id', '=', productid)
}