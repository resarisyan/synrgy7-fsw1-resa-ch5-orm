import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('articles', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('body').notNullable();
    table.string('author').notNullable();
    table.string('image').nullable();
    table.boolean('is_approved').defaultTo(false);
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('articles');
}
