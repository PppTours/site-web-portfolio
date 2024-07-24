import { IsEnum, IsNumber } from 'class-validator';
import { StudyLevel } from '../study-level.enum';
import { StudyLevelEntity } from '../study-level.entity';

export class StudyLevelDTO {
  @IsNumber()
  id: number;

  @IsEnum(StudyLevel)
  name: StudyLevel;

  private constructor(studyLevel: StudyLevelEntity) {
    this.id = studyLevel.id;
    this.name = studyLevel.name;
  }

  static fromEntity(studyLevel: StudyLevelEntity): StudyLevelDTO {
    return new StudyLevelDTO(studyLevel);
  }
}
