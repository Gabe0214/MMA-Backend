const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
// import routes

const productsRoute = require('../productsRoute/productRouter');
const usersRoute = require('../usersRoute/usersRouter');
const authRoute = require('../authRoute/authRouter');
const ordersRoute = require('../ordersRoute/ordersRouter');
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
server.use('/auth', authRoute);
server.use('/orders', ordersRoute);

module.exports = server;
