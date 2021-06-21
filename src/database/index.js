const knexfille = require("../../knexfile");
const knex = require("knex")(knexfille.development);

module.exports = knex;
