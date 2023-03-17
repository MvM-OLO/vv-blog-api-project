import { Controller, Get, Post,Param,Delete, Query } from '@nestjs/common';
import { CatsService } from './test.service';
import { Cats } from './test.entity';

@Controller('vv-blog/cats')
export class CatsController {

   constructor(private catsService: CatsService) {}

   
  @Get()
  findAll(): Promise<Cats[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Query('id') id: number): Promise<Cats> {
    return this.catsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id:number){
    return this.catsService.remove(id);
  }
}