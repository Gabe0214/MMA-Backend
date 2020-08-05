const express = require('express')
const products = require('./productsModel')


const router = express.Router()


router.get('/', async (req, res) => {
 
    try {
        const allProducts = await products.getAllProducts()
        let modifiedProducts = []
        allProducts.map(product => {return modifiedProducts.push({product_id: product.product_id, product_name: product.name, price: product.price, type: product.type , gender: product.gender, brand: product.brand, desc: product.description, images: [{image_one: product.img_source_1}, {image_two: product.image_source_2}, {image_three: product.image_source_3}]})})
        res.status(200).json(modifiedProducts)
    }
    catch(err) {
        console.log(err)  
    }
})



router.get('/:id', async (req, res) => {
    const productId = req.params.id;
    
    try {
        let product = await products.getProductByID(productId)
        if(product){
            const { product_id, name, brand, type, gender, price, description, img_source_1, image_source_2, image_source_3 } = product;
            res.status(200).json({product_id, name, brand, type, gender, price, description, images:[{img_source_1}, {image_source_2}, {image_source_3}]}) 
        }
        else{ res.status(404).json({message: `Product with the given ID: ${productId} does not exist :(.`})}
        
    }
    catch (error){
        res.status(500).json({message: "something went wrong in the server"})
    }
     
   
})





module.exports = router;