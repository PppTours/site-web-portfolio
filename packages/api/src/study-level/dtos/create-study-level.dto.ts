import { IsEnum } from 'class-validator';
import { StudyLevel } from '../enums/study-level.enum';

export class CreateStudyLevelDTO {
  @IsEnum(StudyLevel)
  name: StudyLevel;
}
