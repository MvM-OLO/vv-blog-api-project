import { Controller, Get } from '@nestjs/common';
import { ConfigService } from './config.service';
import { SystemInfoEntity } from './config.entity';

@Controller('vv-blog/config')
export class ConfigController {

    constructor(private configService: ConfigService) {}

    @Get()
    findAll(): Promise<SystemInfoEntity> {
      return this.configService.find(); 
    }
}
