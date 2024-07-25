import { IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';
import { UUID } from 'crypto';
import { StudyLevelDTO } from 'src/study-level/dto/study-level.dto';
import { StudySpecialtyDTO } from 'src/study-specialty/dto/study-specialty.dto';

export class StudentDTO {
  @IsUUID()
  id: UUID;

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
