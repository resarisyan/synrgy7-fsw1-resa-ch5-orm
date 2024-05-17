import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('comments', (table) => {
    table.increments('id').primary();
    table.text('body').notNullable();
    table.integer('article_id').unsigned().notNullable();
    table.foreign('article_id').references('articles.id');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('comments');
}
