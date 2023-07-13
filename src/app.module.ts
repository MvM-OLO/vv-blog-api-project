import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './test/test.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cats } from './test/test.entity';
import { SystemInfoEntity } from './server/config/config.entity';
import { UsersModule } from './users/users.module';
import { ConfigModule } from './server/config/config.module';
@Module({
  imports: [CatsModule,
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'test',
      entities: [Cats,SystemInfoEntity],
      synchronize: true,
    }),
    UsersModule,
    ConfigModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  
}
