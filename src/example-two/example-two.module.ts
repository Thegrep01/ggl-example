import { Module } from '@nestjs/common';
import { ExampleTwoResolvers } from './example-two.resolver';
import { ExampleService } from 'src/example.service';

@Module({
  providers: [ExampleTwoResolvers, ExampleService],
})
export class ExampleTwoModule {}
