import { Query, Resolver, ResolveProperty, Parent } from '@nestjs/graphql';
import { Book, Author } from 'src/graphql.schema';
import { ExampleService } from '../example.service';

@Resolver('Book')
export class ExampleTwoResolvers {
  public constructor(private exampleOneService: ExampleService) {}

  @Query()
  async exampleOne(): Promise<Book[]> {
    return await this.exampleOneService.getBooks();
  }

  @ResolveProperty(_ => Author)
  public async author(@Parent() root) {
    return this.exampleOneService.getAuthor(root.authorId);
  }
}
