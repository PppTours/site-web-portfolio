import { Injectable } from '@nestjs/common';
import { UUID } from 'crypto';
import { StudyLevelDTO } from 'src/study-level/dtos/study-level.dto';
import { StudyLevelService } from 'src/study-level/study-level.service';
import { CreateStudentRequestDTO } from './dtos/create-student-request.dto';
import { StudentListDTO } from './dtos/student-list.dto';
import { StudentDTO } from './dtos/student.dto';
import { StudentRepository } from './student.repository';
import { StudySectorDTO } from 'src/study-sector/dto/study-sector.dto';
import { StudySectorService } from 'src/study-sector/study-sector.service';
import { StudentWithNoSectorRequiredException } from './exceptions/student-with-no-specialty-required.exception';
import { StudentWithSectorRequiredException } from './exceptions/student-with-specialty-required.exception';

@Injectable()
export class StudentService {
  constructor(
    private repository: StudentRepository,
    private studyLevelService: StudyLevelService,
    private studySectorService: StudySectorService,
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
    const sector = studentDTO.sector
      ? await this.studySectorService.get(studentDTO.sector.id)
      : null;
    this.assertStudyLevelAndSectorConsistency(level, sector);
    return await this.repository.insert(studentDTO);
  }

  private assertStudyLevelAndSectorConsistency(
    level: StudyLevelDTO,
    sector: StudySectorDTO,
  ) {
    if (this.studyLevelService.shouldHaveSector(level)) {
      if (!sector) throw new StudentWithSectorRequiredException(level);
    } else {
      if (sector) throw new StudentWithNoSectorRequiredException(level);
    }
  }
}
