import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './database/typeorm.config';
import { EnvModule } from './env/env.module';
import { StudentModule } from './student/student.module';
import { StudySpecialtyModule } from './study-specialty/study-specialty.module';
import { StudyLevelModule } from './study-level/study-level.module';

@Module({
  imports: [
    EnvModule,
    TypeOrmModule.forRoot(typeormConfig.getTypeOrmModuleOptions()),
    StudentModule,
    StudySpecialtyModule,
    StudyLevelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
