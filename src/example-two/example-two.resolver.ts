import {
  Query,
  Resolver,
  ResolveProperty,
  Parent,
  Context,
  Info,
} from '@nestjs/graphql';
import { Book, Author } from 'src/graphql.schema';
import { ExampleService } from '../example.service';
import DataLoader = require('dataloader');

@Resolver('Book')
export class ExampleTwoResolvers {
  public constructor(private exampleOneService: ExampleService) {}

  @Query()
  async exampleOne(@Info() info): Promise<Book[]> {
    const columns: string[] = info.fieldNodes[0].selectionSet.selections.map(
      sel => (sel.name.value !== 'author' ? sel.name.value : 'authorId'),
    );
    return await this.exampleOneService.getBooks(columns);
  }

  @ResolveProperty(_ => Author)
  public async author(@Parent() root, @Context() context, @Info() info) {
    const { dataloaders } = context;

    let dl = dataloaders.get(info.fieldNodes);
    const columns: string[] = info.fieldNodes[0].selectionSet.selections.map(
      sel => sel.name.value,
    );
    if (!dl) {
      dl = new DataLoader(async (ids: any) => {
        return await this.exampleOneService.getAuthorsByIds(ids, columns);
      });
      dataloaders.set(info.fieldNodes, dl);
    }
    return dl.load(root.authorId);
  }
}
