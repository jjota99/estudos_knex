// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "aulaknex",
      user: "aulaknex",
      password: "aulaknex",
    },

    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`,
    },

    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    },
  },
};
