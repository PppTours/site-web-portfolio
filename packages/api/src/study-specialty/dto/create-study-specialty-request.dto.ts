import { IsEnum, IsString } from 'class-validator';
import { StudySpecialtyInitialism } from '../enums/study-specialty.enum';

export class CreateStudySpecialtyRequestDTO {
  @IsEnum(StudySpecialtyInitialism)
  initialism: StudySpecialtyInitialism;

  @IsString()
  title: string;
}
