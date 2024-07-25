import { Injectable } from '@nestjs/common';
import { DtoService } from 'src/interfaces/dto-service.interface';
import { StudySpecialtyEntity } from '../study-Specialty.entity';
import { StudySpecialtyDTO } from './study-Specialty.dto';

@Injectable()
export class StudySpecialtyDtoService
  implements DtoService<StudySpecialtyEntity, StudySpecialtyDTO>
{
  public convertToDTO(studySpecialty: StudySpecialtyEntity): StudySpecialtyDTO {
    const dto = new StudySpecialtyDTO();
    dto.id = studySpecialty.id;
    dto.initialism = studySpecialty.initialism;
    dto.title = studySpecialty.title;
    return dto;
  }
}
