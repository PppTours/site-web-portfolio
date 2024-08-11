import { Injectable } from '@nestjs/common';
import { StudyLevelMapperService } from 'src/study-level/services/study-level-mapper.service';
import { StudySectorMapperService } from 'src/study-sector/services/study-sector-mapper.service';

import { StudentDTO } from '../dtos/student.dto';
import { StudentListDTO } from '../dtos/student-list.dto';
import { StudentEntity } from '../entities/student.entity';

@Injectable()
export class StudentMapperService {
  constructor(
    private studyLevelMapper: StudyLevelMapperService,
    private studySectorMapper: StudySectorMapperService,
  ) {}

  public toDTO(student: StudentEntity): StudentDTO {
    const dto = new StudentDTO();
    dto.id = student.id;
    dto.firstName = student.firstName;
    dto.lastName = student.lastName;
    dto.profilePictureUrl = student.profilePictureUrl ?? null;
    dto.studyLevel = this.studyLevelMapper.toDTO(student.studyLevel);
    dto.studySector = student.studySector
      ? this.studySectorMapper.toDTO(student.studySector)
      : null;
    return dto;
  }

  public toListDTO(students: StudentEntity[]): StudentListDTO {
    const listDTO = new StudentListDTO();
    listDTO.count = students.length;
    listDTO.students = students.map((student) => this.toDTO(student));
    return listDTO;
  }
}
