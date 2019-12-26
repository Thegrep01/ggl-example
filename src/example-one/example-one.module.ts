import { Module } from '@nestjs/common';
import { ExampleOneResolvers } from './example-one.resolver';
import { ExampleService } from 'src/example.service';

@Module({
  providers: [ExampleOneResolvers, ExampleService],
})
export class ExampleOneModule {}
