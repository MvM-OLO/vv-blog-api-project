import { Controller, Get, Post,Param,Delete, Query } from '@nestjs/common';
import { CatsService } from './test.service';
import { Cats } from './test.entity';
import { query } from 'express';

@Controller('vv-blog/cats')
export class CatsController {

   constructor(private catsService: CatsService) {}

  @Get()
  findOne(@Query() query): Promise<Cats[]|Cats> {  
    return this.catsService.find(query);
  }

  @Delete()
  remove(@Query() query){
    return this.catsService.remove(query.id);
  }
  @Post()
  add(@Query() query){
    return this.catsService.add(query);
  }
}