import { Injectable } from '@nestjs/common';
import { StudyLevelEntity } from '../study-level.entity';
import { StudyLevelDTO } from '../dtos/study-level.dto';
import { CreateStudyLevelRequestDTO } from '../dtos/create-study-level-request.dto';
import { StudyLevelCreationDTO } from '../dtos/study-level-creation.dto';

@Injectable()
export class StudyLevelMapperService {
  public toDTO(studyLevel: StudyLevelEntity): StudyLevelDTO {
    const dto = new StudyLevelDTO();
    dto.name = studyLevel.name;
    return dto;
  }

  public toEntityWithoutId(
    studyLevel: CreateStudyLevelRequestDTO,
  ): StudyLevelCreationDTO {
    return {
      name: studyLevel.name,
    };
  }
}
