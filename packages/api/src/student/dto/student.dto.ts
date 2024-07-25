import {
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { StudyLevelDTO } from 'src/study-level/dto/study-level.dto';
import { StudySpecialtyDTO } from 'src/study-specialty/dto/study-specialty.dto';

export class StudentDTO {
  @IsNumber()
  id: number;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @IsOptional()
  profilePictureUrl: string | null;

  @ValidateNested()
  level: StudyLevelDTO;

  @ValidateNested()
  specialty: StudySpecialtyDTO;
}
