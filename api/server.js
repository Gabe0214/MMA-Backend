const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
// import routes

const productsRoute = require('../productsRoute/productRouter');
const usersRoute = require('../usersRoute/usersRouter');
const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());
server.use(helmet());

server.get('/', (req, res) => {
	res.status(200).json({ message: 'MMA Store Data RUnning' });
});

server.use('/products', productsRoute);
server.use('/users', usersRoute);

module.exports = server;
