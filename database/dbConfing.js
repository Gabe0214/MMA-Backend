require('dotenv').config()

const knex = require('knex');

const knexConfing = require('../knexfile')

const enviornment = process.env.DB-ENV || 'development';

module.exports = knex(knexConfing[enviornment])