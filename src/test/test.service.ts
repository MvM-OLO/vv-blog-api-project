import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cats } from './test.entity';

@Injectable()
export class CatsService {

  constructor(
    @InjectRepository(Cats)
    private catsRepository: Repository<Cats>
  ) {}

  async find(query): Promise<Cats[]|Cats> {
    return await this.catsRepository.find(
      {where:{...query}}
    );
  }
  async remove(id: number): Promise<void> {
    await this.catsRepository.delete(id);
  }
   add(cats: Cats) {
    this.catsRepository.create(cats);
  }
}