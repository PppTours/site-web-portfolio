import { Injectable } from '@nestjs/common';
import { UUID } from 'crypto';
import { StudyLevelDTO } from 'src/study-level/dtos/study-level.dto';
import { StudyLevelService } from 'src/study-level/study-level.service';
import { StudySpecialtyDTO } from 'src/study-specialty/dto/study-specialty.dto';
import { StudySpecialtyService } from 'src/study-specialty/study-specialty.service';
import { CreateStudentRequestDTO } from './dtos/create-student-request.dto';
import { StudentListDTO } from './dtos/student-list.dto';
import { StudentDTO } from './dtos/student.dto';
import { StudentWithNoSpecialtyRequiredException } from './exceptions/student-with-no-specialty-required.exception';
import { StudentRepository } from './student.repository';
import { StudentWithSpecialtyRequiredException } from './exceptions/student-with-specialty-required.exception';

@Injectable()
export class StudentService {
  constructor(
    private repository: StudentRepository,
    private studyLevelService: StudyLevelService,
    private studySpecialtyService: StudySpecialtyService,
  ) {}

  public async get(id: UUID): Promise<StudentDTO> {
    return await this.repository.findById(id);
  }

  public async getAll(): Promise<StudentListDTO> {
    return await this.repository.findAll();
  }

  public async create(
    studentDTO: CreateStudentRequestDTO,
  ): Promise<StudentDTO> {
    const level = await this.studyLevelService.get(studentDTO.level.id);
    const specialty = studentDTO.specialty
      ? await this.studySpecialtyService.get(studentDTO.specialty.id)
      : null;
    this.assertStudyLevelAndSpecialtyConsistency(level, specialty);
    return await this.repository.insert(studentDTO);
  }

  private assertStudyLevelAndSpecialtyConsistency(
    level: StudyLevelDTO,
    specialty: StudySpecialtyDTO,
  ) {
    if (this.studyLevelService.shouldHaveSpecialty(level)) {
      if (!specialty) throw new StudentWithSpecialtyRequiredException(level);
    } else {
      if (specialty) throw new StudentWithNoSpecialtyRequiredException(level);
    }
  }
}
