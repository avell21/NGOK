const knex = require("knex");

const postgres = knex({
  client: "postgres",
  connection: {
    user: "postgres",
    host: "0.0.0.0",
    password: "Password",
    database: "postgres"
  }
});
[
  // postgres.raw("DROP DATABASE IF EXISTS Database"),
  // postgres.raw('DROP USER IF EXISTS av'),
  // postgres.raw('CREATE USER av SUPERUSER'),
  postgres.raw("CREATE DATABASE test1")
]
  .reduce((promise, query) => {
    return promise.then(() => query);
  }, Promise.resolve())
  .then(() => {
    return Promise.all([postgres.destroy()]);
  })
  .catch(e => {
    return console.log(e);
  });
