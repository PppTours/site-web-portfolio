import { Injectable } from '@nestjs/common';
import { DtoService } from 'src/interfaces/dto-service.interface';
import { StudyLevelEntity } from '../study-level.entity';
import { StudyLevelDTO } from './study-level.dto';

@Injectable()
export class StudyLevelDtoService
  implements DtoService<StudyLevelEntity, StudyLevelDTO>
{
  public convertToDTO(studyLevel: StudyLevelEntity): StudyLevelDTO {
    const dto = new StudyLevelDTO();
    dto.id = studyLevel.id;
    dto.name = studyLevel.name;
    return dto;
  }
}
