import { Knex } from 'knex';
import { faker } from '@faker-js/faker';
import { randomInt } from 'crypto';

const tableName = 'comments';
export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(tableName).del();

  // Get all article ids
  const articleIds = await knex('articles').pluck('id');

  // Inserts seed entries
  const comments = Array.from({ length: 10 }, () => ({
    body: faker.lorem.paragraphs(1),
    article_id: articleIds[randomInt(0, articleIds.length - 1)],
    created_at: faker.date.recent(),
    updated_at: faker.date.recent(),
  }));

  await knex(tableName).insert(comments);
}
