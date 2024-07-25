import { IsEnum, IsString } from 'class-validator';
import { StudySpecialtyInitialism } from '../study-specialty.enum';

export class CreateStudySpecialtyRequestDTO {
  @IsEnum(StudySpecialtyInitialism)
  initialism: StudySpecialtyInitialism;

  @IsString()
  title: string;
}
