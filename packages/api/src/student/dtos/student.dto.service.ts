import { Injectable } from '@nestjs/common';
import { DtoService } from 'src/interfaces/dto-service.interface';
import { StudentEntity } from '../student.entity';
import { StudentListDTO } from './student-list.dto';
import { StudentDTO } from './student.dto';
import { StudyLevelDtoService } from 'src/study-level/dtos/study-level.dto.service';
import { StudySectorDtoService } from 'src/study-sector/dto/study-sector.dto.service';

@Injectable()
export class StudentDtoService
  implements DtoService<StudentEntity, StudentDTO>
{
  constructor(
    private studyLevelDtoService: StudyLevelDtoService,
    private studySectorDtoService: StudySectorDtoService,
  ) {}

  public convertToDTO(student: StudentEntity): StudentDTO {
    const dto = new StudentDTO();
    dto.id = student.id;
    dto.firstName = student.firstName;
    dto.lastName = student.lastName;
    dto.profilePictureUrl = student.profilePictureUrl ?? null;
    dto.level = this.studyLevelDtoService.convertToDTO(student.level);
    dto.sector = student.sector
      ? this.studySectorDtoService.convertToDTO(student.sector)
      : null;
    return dto;
  }

  public convertToListDTO(students: StudentEntity[]): StudentListDTO {
    const listDTO = new StudentListDTO();
    listDTO.count = students.length;
    listDTO.students = students.map((student) => this.convertToDTO(student));
    return listDTO;
  }
}
