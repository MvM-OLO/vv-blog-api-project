import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsController } from './test.controller';
import { CatsService } from './test.service';
import { Cats } from './test.entity';
@Module({
  imports:[TypeOrmModule.forFeature([Cats])],
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {
  constructor(private readonly catsService: CatsService) {}
}
