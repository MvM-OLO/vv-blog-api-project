import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SystemInfoEntity } from './config.entity';

@Injectable()
export class ConfigService {

  constructor(
    @InjectRepository(SystemInfoEntity)
    private configRepository: Repository<SystemInfoEntity>
  ) {}

  async find(): Promise<SystemInfoEntity> {
    return await this.configRepository.findOne(
      {where:{id:1}}
    );
  }
}