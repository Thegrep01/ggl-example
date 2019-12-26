import { Injectable } from '@nestjs/common';
import { knex } from 'src/common/db';

@Injectable()
export class ExampleService {
  public async getBooks() {
    console.log('=====> select all books');
    return await knex('books')
      .select()
      .limit(5);
  }
  public async getAuthor(id: number) {
    console.log(`=====> select user ${id}`);
    return await knex('users')
      .select()
      .where('id', id)
      .first();
  }
}
