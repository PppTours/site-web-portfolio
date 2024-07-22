import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { StudentEntity } from './student.entity';
import { StudentCreationDTO } from './dto/student-creation.dto';
import { StudyLevelService } from 'src/study-level/study-level.service';
import { StudySpecialtyService } from 'src/study-specialty/study-specialty.service';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private repository: Repository<StudentEntity>,
    private studyLevelService: StudyLevelService,
    private studySpecialtyService: StudySpecialtyService,
  ) {}

  public async findAll(): Promise<StudentEntity[]> {
    return await this.repository.find();
  }

  public async create(studentDTO: StudentCreationDTO): Promise<StudentEntity> {
    const level = await this.studyLevelService.findById(studentDTO.level.id);
    const specialty = await this.studySpecialtyService.findById(
      studentDTO.specialty.id,
    );
    return await this.repository.save({
      firstName: studentDTO.firstName,
      lastName: studentDTO.lastName,
      profilePictureUrl: studentDTO.profilePictureUrl,
      level,
      specialty,
    });
  }
}
