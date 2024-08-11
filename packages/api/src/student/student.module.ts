import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudyLevelModule } from 'src/study-level/study-level.module';
import { StudySectorModule } from 'src/study-sector/study-sector.module';

import { StudentController } from './controllers/student.controller';
import { StudentEntity } from './entities/student.entity';
import { StudentService } from './services/student.service';
import { StudentMapperService } from './services/student-mapper.service';
import { StudentValidationService } from './services/student-validation.service';

@Module({
  imports: [
    StudyLevelModule,
    StudySectorModule,
    TypeOrmModule.forFeature([StudentEntity]),
  ],
  providers: [StudentService, StudentMapperService, StudentValidationService],
  controllers: [StudentController],
})
export class StudentModule {}
