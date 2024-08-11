import { IsEnum } from 'class-validator';

import { StudyLevel } from '../enums/study-level.enum';

export class StudyLevelDTO {
  @IsEnum(StudyLevel)
  name: StudyLevel;
}
