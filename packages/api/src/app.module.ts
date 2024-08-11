import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeormConfig } from './database/typeorm.config';
import { EnvModule } from './env/env.module';
import { StudentModule } from './student/student.module';
import { StudyLevelModule } from './study-level/study-level.module';
import { StudySectorModule } from './study-sector/study-sector.module';

@Module({
  imports: [
    EnvModule,
    TypeOrmModule.forRoot(typeormConfig.getTypeOrmModuleOptions()),
    StudentModule,
    StudySectorModule,
    StudyLevelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
