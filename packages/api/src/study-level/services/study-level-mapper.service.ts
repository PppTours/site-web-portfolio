import { Injectable } from '@nestjs/common';
import { StudyLevelDTO } from '../dtos/study-level.dto';
import { StudyLevelEntity } from '../entities/study-level.entity';

@Injectable()
export class StudyLevelMapperService {
  public toDTO(studyLevel: StudyLevelEntity): StudyLevelDTO {
    const dto = new StudyLevelDTO();
    dto.name = studyLevel.name;
    return dto;
  }
}
