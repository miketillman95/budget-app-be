const knex = require('knex');
const knexConfig = require('../knexfile.js');
const environment =  'production';

module.exports = knex(knexConfig[environment]);