import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { StudyLevelGettingDTO } from 'src/study-level/dto/study-level-getting.dto';
import { StudySpecialtyGettingDTO } from 'src/study-specialty/dto/study-specialty-getting.dto';

export class StudentCreationDTO {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @IsOptional()
  profilePictureUrl?: string;

  @ValidateNested()
  level: StudyLevelGettingDTO;

  @ValidateNested()
  specialty: StudySpecialtyGettingDTO;
}
