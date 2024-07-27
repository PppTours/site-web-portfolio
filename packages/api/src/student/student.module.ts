import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudyLevelModule } from 'src/study-level/study-level.module';
import { StudySpecialtyModule } from 'src/study-specialty/study-specialty.module';
import { StudentController } from './student.controller';
import { StudentEntity } from './student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentDtoService } from './dtos/student.dto.service';
import { StudentRepository } from './student.repository';

@Module({
  imports: [
    StudyLevelModule,
    StudySpecialtyModule,
    TypeOrmModule.forFeature([StudentEntity]),
  ],
  providers: [StudentService, StudentDtoService, StudentRepository],
  controllers: [StudentController],
})
export class StudentModule {}
