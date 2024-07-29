import { Module } from '@nestjs/common';
import { StudyLevelModule } from 'src/study-level/study-level.module';
import { StudentController } from './student.controller';
import { StudentEntity } from './student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentRepository } from './student.repository';
import { StudySectorModule } from 'src/study-sector/study-sector.module';
import { StudentService } from './student.service';
import { StudentRelationsService } from './services/student-relations.service';
import { StudentMapperService } from './services/student-mapper.service';

@Module({
  imports: [
    StudyLevelModule,
    StudySectorModule,
    TypeOrmModule.forFeature([StudentEntity]),
  ],
  providers: [
    StudentService,
    StudentMapperService,
    StudentRelationsService,
    StudentRepository,
  ],
  controllers: [StudentController],
})
export class StudentModule {}
