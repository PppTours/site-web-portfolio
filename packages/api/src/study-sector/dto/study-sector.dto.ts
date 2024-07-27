import { IsEnum, IsNumber, IsString } from 'class-validator';
import { StudySectorInitialism } from '../enums/study-sector.enum';

export class StudySectorDTO {
  @IsNumber()
  id: number;

  @IsEnum(StudySectorInitialism)
  initialism: StudySectorInitialism;

  @IsString()
  title: string;
}
