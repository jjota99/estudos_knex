const knex = require("../database/index");

module.exports = {
  async index(req, res) {
    const results = await knex("users");
    return res.json(results);
  },
};
