import { knex } from './db';
import * as faker from 'faker';

knex('users')
  .select()
  .limit(1)
  .catch(async err => {
    console.log(err);
    if (err.message.includes('no such table')) {
      await knex.schema.createTable('users', table => {
        table.increments('id');
        table.string('name');
      });
      await knex.schema.createTable('books', table => {
        table.increments('id');
        table.string('title');
        table.integer('authorId');
        table.foreign('authorId').references('users.id');
      });
      for (let i = 0; i < 100; i++) {
        const ids = await knex('users').insert({
          name: faker.name.findName(),
        });
        await knex('books').insert({
          title: faker.company.companyName(),
          authorId: ids[0],
        });
      }
    } else {
      throw err;
    }
  })
  .then(() => console.log('DONE'));
