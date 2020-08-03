const express = require('express')
const products = require('./productsModel')


const router = express.Router()


router.get('/', (req, res) => {
    products.getAllProducts()
    .then(items =>{
      res.status(200).json(items)
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