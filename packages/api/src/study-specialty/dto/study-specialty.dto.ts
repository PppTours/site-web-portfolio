import { IsEnum, IsNumber, IsString } from 'class-validator';
import { StudySpecialtyInitialism } from '../enums/study-specialty.enum';

export class StudySpecialtyDTO {
  @IsNumber()
  id: number;

  @IsEnum(StudySpecialtyInitialism)
  initialism: StudySpecialtyInitialism;

  @IsString()
  title: string;
}
