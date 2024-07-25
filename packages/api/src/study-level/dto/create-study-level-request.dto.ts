import { IsEnum } from 'class-validator';
import { StudyLevel } from '../study-level.enum';

export class CreateStudyLevelRequestDTO {
  @IsEnum(StudyLevel)
  name: StudyLevel;
}
