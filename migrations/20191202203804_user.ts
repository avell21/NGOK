import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return Promise.all([
    knex.schema.createTable("users", table => {
      table.uuid("id").primary();
      table.string("email");
      table.string("phoneNumber");
      table.string("firstName");
      table.string("lastName");
      table.string("avatar");
      table.timestamps();
    })
  ]);
}

export async function down(knex: Knex): Promise<any> {
  return Promise.all([knex.schema.dropTable("users")]);
}
