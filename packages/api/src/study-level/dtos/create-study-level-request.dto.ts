import { IsEnum } from 'class-validator';
import { StudyLevel } from '../enums/study-level.enum';

export class CreateStudyLevelRequestDTO {
  @IsEnum(StudyLevel)
  name: StudyLevel;
}
