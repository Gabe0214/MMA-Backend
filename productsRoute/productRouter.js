const express = require('express')
const products = require('./productsModel')


const router = express.Router()


router.get('/', (req, res) => {
    products.getAllProducts()
    .then(items => { return items})
    .then(items=> {
        let allItems = [];
        items.map(item => {
           allItems.push({product_id: item.product_id, product_name: item.name, price: item.price, type: item.type , gender: item.gender, brand: item.brand, desc: item.description, images: [{image_one: item.img_source_1}, {image_two: item.image_source_2}, {image_three: item.image_source_3}]})
        })
        res.status(200).json(allItems)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: 'Something went wrong :('})
    })
})



router.get('/:id', (req, res) => {
    const productId = req.params.id;

    products.getProductImages(productId)
    .then(item =>{
        // console.log(items)
        res.status(200).json(item)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: 'Something went wrong :('})
    })
})


module.exports = router;