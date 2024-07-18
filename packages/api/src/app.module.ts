import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './database/typeorm.config';
import { EnvModule } from './env/env.module';

@Module({
  imports: [
    EnvModule,
    TypeOrmModule.forRoot(typeormConfig.getTypeOrmModuleOptions()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
