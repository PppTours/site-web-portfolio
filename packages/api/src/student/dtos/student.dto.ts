import { IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';
import { UUID } from 'crypto';
import { StudyLevelDTO } from 'src/study-level/dtos/study-level.dto';
import { StudySectorDTO } from 'src/study-sector/dto/study-sector.dto';

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
  studyLevel: StudyLevelDTO;

  @ValidateNested()
  @IsOptional()
  studySector: StudySectorDTO | null;
}
