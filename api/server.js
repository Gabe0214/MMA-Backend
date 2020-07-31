const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

// import routes 

const productsRoute = require('../productsRoute/productRouter')

const server = express();

server.use(express.json());
server.use(cors())
server.use(helmet())

server.get('/', (req, res) => {
    res.status(200).json({message: "MMA Store Data RUnning"})
})

server.use('/products', productsRoute)

module.exports = server