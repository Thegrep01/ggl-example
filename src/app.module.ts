import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ExampleOneModule } from './example-one/example-one.module';
import { ExampleService } from './example.service';
import { ExampleTwoModule } from './example-two/example-two.module';

@Module({
  imports: [
    ExampleOneModule,
    ExampleTwoModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      include: [ExampleOneModule],
      path: '/one',
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      include: [ExampleTwoModule],
      path: '/two',
      context: ({ req }) => ({
        req,
        dataloaders: new WeakMap(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
