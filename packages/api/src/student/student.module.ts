import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudyLevelModule } from 'src/study-level/study-level.module';
import { StudySpecialtyModule } from 'src/study-specialty/study-specialty.module';
import { StudentController } from './student.controller';
import { StudentEntity } from './student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentDtoService } from './dto/student.dto.service';

@Module({
  imports: [
    StudyLevelModule,
    StudySpecialtyModule,
    TypeOrmModule.forFeature([StudentEntity]),
  ],
  providers: [StudentService, StudentDtoService],
  controllers: [StudentController],
})
export class StudentModule {}
