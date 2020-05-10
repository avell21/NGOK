import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return Promise.all([
    knex.raw('create extension if not exists "uuid-ossp"'),
    knex.schema.createTable("users", table => {
      table
        .uuid("id")
        .primary()
        .defaultTo(knex.raw("uuid_generate_v4()"));
      table
        .string("email")
        .unique()
        .notNullable();
      table.string("phoneNumber");
      table.string("firstName");
      table.string("lastName");
      table.string("avatar");
      table.dateTime("createdAt").defaultTo(knex.raw("CURRENT_TIMESTAMP"));
      table.dateTime("updatedAt").defaultTo(knex.raw(`CURRENT_TIMESTAMP`));
    })
  ]);
}

export async function down(knex: Knex): Promise<any> {
  return Promise.all([knex.schema.dropTable("users")]);
}
