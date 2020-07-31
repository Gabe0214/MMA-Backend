const express = require('express')
const products = require('./productsModel')
const { on } = require('../database/dbConfing')

const router = express.Router()


router.get('/', (req, res) => {
    products.getAllProducts()
    .then(items =>{
        
        for(item of items){
            const { product_id } = item
            console.log(product_id)
          products.getProductImages(product_id)
          .then( images=> {
              res.status(200).json([...items])
          })
        }
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