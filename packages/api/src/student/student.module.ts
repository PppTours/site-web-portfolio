import { Module } from '@nestjs/common';
import { StudyLevelModule } from 'src/study-level/study-level.module';
import { StudentController } from './controllers/student.controller';
import { StudentEntity } from './entities/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudySectorModule } from 'src/study-sector/study-sector.module';
import { StudentService } from './services/student.service';
import { StudentValidationService } from './services/student-validation.service';
import { StudentMapperService } from './services/student-mapper.service';

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
