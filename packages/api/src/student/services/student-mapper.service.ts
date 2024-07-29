import { Injectable } from '@nestjs/common';
import { StudentEntity } from '../student.entity';
import { StudyLevelMapperService } from 'src/study-level/services/study-level-mapper.service';
import { StudentListDTO } from '../dtos/student-list.dto';
import { StudentDTO } from '../dtos/student.dto';
import { StudySectorMapperService } from 'src/study-sector/services/study-sector-mapper.service';
import { StudentRelations } from '../student-relations';
import { CreateStudentRequestDTO } from '../dtos/create-student-request.dto';
import { StudentCreationDTO } from '../dtos/student-creation.dto';

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
    dto.level = this.studyLevelMapper.toDTO(student.studyLevel);
    dto.sector = student.studySector
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

  public toEntityWithoutId(
    studentDTO: CreateStudentRequestDTO,
    studentRelations: StudentRelations,
  ): StudentCreationDTO {
    return {
      firstName: studentDTO.firstName,
      lastName: studentDTO.lastName,
      profilePictureUrl: studentDTO.profilePictureUrl,
      studyLevel: studentRelations.studyLevel,
      studySector: studentRelations.studySector ?? null,
    };
  }
}
