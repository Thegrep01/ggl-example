import { Injectable } from '@nestjs/common';
import { knex } from 'src/common/db';

@Injectable()
export class ExampleService {
  public async getBooks(projection?: string[]) {
    console.log(`=====> select ${projection} from books`);
    console.log(
      await knex('books')
        .select(projection)
        .limit(5),
    );
    return await knex('books')
      .select(projection)
      .limit(5);
  }
  public async getAuthor(id: number) {
    console.log(`=====> select user ${id}`);
    return await knex('users')
      .select()
      .where('id', id)
      .first();
  }
  public async getAuthorsByIds(ids: number[], projection: string[]) {
    console.log(
      `=====> select ${projection} from users where users.id in ${ids}`,
    );
    return await knex('users')
      .select(projection)
      .whereIn('id', ids);
  }
}
