import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ConfigService } from './config.service';
import { SystemInfoEntity } from './config.entity';
import {
  ApiBearerAuth,
  ApiResponse,
  ApiOperation, ApiTags,
} from '@nestjs/swagger';
import { HttpInterceptor } from 'src/interceptor/global';

@ApiTags('系统配置')
@UseInterceptors(HttpInterceptor)
@Controller('config')
export class ConfigController {

    constructor(private configService: ConfigService) {}

    @ApiOperation({ summary: '获取系统配置' })
    @ApiResponse({ status: 200, description: 'Return article feed.'})
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @Get()
    findAll(): Promise<SystemInfoEntity> {
      return this.configService.find(); 
    }
}
