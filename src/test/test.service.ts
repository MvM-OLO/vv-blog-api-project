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

  async findAll(): Promise<Cats[]> {
    return await this.catsRepository.find();
  }

  async findOne(id: any): Promise<Cats> {
    //@ts-ignore
    return await this.catsRepository.findOne(id);
    
  }
  async remove(id: number): Promise<void> {
    await this.catsRepository.delete(id);
  }
}