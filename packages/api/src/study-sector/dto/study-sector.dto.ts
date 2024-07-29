import { IsEnum, IsString } from 'class-validator';
import { StudySectorInitialism } from '../enums/study-sector.enum';

export class StudySectorDTO {
  @IsEnum(StudySectorInitialism)
  initialism: StudySectorInitialism;

  @IsString()
  title: string;
}
