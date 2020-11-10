const express = require('express')
const products = require('./productsModel')



const router = express.Router()


router.get('/', async (req, res) => {
 
    try {
        const allProducts = await products.getAllProducts()
        let modifiedProducts = []
        allProducts.map(product => {return modifiedProducts.push({product_id: product.product_id, product_name: product.name, price: product.price, type: product.type , gender: product.gender, brand: product.brand, desc: product.description, images: [{image_one: product.img_source_1}, {image_two: product.image_source_2}, {image_three: product.image_source_3}]})})
        const qry = req.query

        
   


        if(Object.keys(qry).length > 0) {
            console.log('hello')
            const filteredProducts =  await products.filterProductsByQueryParams(qry)
           
          
          res.status(200).json(filteredProducts)
        }
          else {res.status(200).json(modifiedProducts)}
    }
    catch(err) {
        console.log(err)  
    }
})



router.get('/:id', async (req, res) => {
    const productId = req.params.id;
    
    try {
        let product = await products.getProductAndImagesByID(productId)
        if(product){
            const { product_id, name, brand, type, gender, price, description, img_source_1, image_source_2, image_source_3 } = product;
            res.status(200).json({product_id, name, brand, type, gender, price, description, images:[{img:img_source_1}, {img: image_source_2}, {img: image_source_3}]}) 
        }
        else{ res.status(404).json({message: `Product with the given ID: ${productId} does not exist :(.`})}
        
    }
    catch (error){
        res.status(500).json({message: "something went wrong in the server"})
    }
     
   
})


// DELETE product 

router.delete('/:id', async (req, res) => {

    try {
         const deleteProduct = await products.deleteProduct(req.params.id)
         res.status(200).json({message: "Product deleted"})
    }

    catch (err) {
        console.log(err)
        res.status(500).json({message: "something went wrong with the server"})
    }
})


// Update a product

router.put('/:id', async (req, res) => {
   try{
       const id = req.params.id;
       const upDatedProduct = await products.upDateProduct(id, req.body)
       res.status(200).json(upDatedProduct)
      

   }

   catch (err){
       console.log(err)
       res.status(500).json({message: "something went wrong with the server"})
   }
})


//Update product image
router.put('/product-image/:id', async (req, res) => {


  try {
       const id = req.params.id
       const changes = req.body
       const upDatedProductImage = await products.upDateProductImages(id, changes)
       if(id){ res.status(200).json(upDatedProductImage)}
       else {
           res.status(404).json({message: "id does not exist :("})
       }
  }

  catch (err){
      console.log(err)
      res.status(500).json({message: "something went wrong in the server"})
  }
})


// insert a product 

router.post('/', async (req, res) => {

    try {
          const data = req.body
          const product = await products.insertProduct(data)
          res.status(200).json(product)

    }

    catch (err) {
        console.log(err)
        res.status(500).json({message: "error something went wrong in the server"})
    }
})

// post product images

router.post('/product-image', async (req, res) => {

    try {
        const insertedData = await products.insertProductImage(req.body)
        res.status(200).json(insertedData)
    }

    catch (err) {
      console.log(err)
      res.status(500).json({message: "something went wrong in server"})
    }
})



module.exports = router;