import { IsEnum, IsNumber } from 'class-validator';
import { StudyLevel } from '../enums/study-level.enum';

export class StudyLevelDTO {
  @IsNumber()
  id: number;

  @IsEnum(StudyLevel)
  name: StudyLevel;
}
