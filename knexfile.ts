import { development, staging, production } from "./config";
module.exports = {
  development: {
    client: "postgres",
    connection: {
      ...development
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      extension: "ts",
      tableName: "knex_migrations"
    }
  },
  staging: {
    client: "postgres",
    connection: {
      ...staging
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      extension: "ts",
      tableName: "knex_migrations"
    }
  },
  production: {
    client: "postgres",
    connection: {
      ...production
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      extension: "ts",
      tableName: "knex_migrations"
    }
  }
};
