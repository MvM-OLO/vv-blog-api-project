import { Module } from '@nestjs/common';
import { ConfigController } from './config.controller';
import { ConfigService } from './config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {SystemInfoEntity} from './config.entity'
@Module({
  imports:[TypeOrmModule.forFeature([SystemInfoEntity])],
  controllers: [ConfigController],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {
  constructor(private readonly configService: ConfigService) {}
}

