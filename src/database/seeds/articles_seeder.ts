import { Knex } from 'knex';
import { faker } from '@faker-js/faker';

const tableName = 'articles';
export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(tableName).del();

  // Inserts seed entries
  const articles = Array.from({ length: 10 }, () => ({
    title: faker.lorem.sentence(),
    body: faker.lorem.paragraphs(3),
    author: faker.name.firstName(),
    image: faker.image.imageUrl(),
    is_approved: true,
    created_at: faker.date.recent(),
    updated_at: faker.date.recent(),
  }));

  await knex(tableName).insert(articles);
}
