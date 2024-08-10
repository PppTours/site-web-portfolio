import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { GetStudyLevelDTO } from 'src/study-level/dtos/get-study-level.dto';
import { GetStudySectorDTO } from 'src/study-sector/dto/get-study-sector.dto';

export class CreateStudentDTO {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @IsOptional()
  profilePictureUrl?: string;

  @ValidateNested()
  @Type(() => GetStudyLevelDTO)
  studyLevel: GetStudyLevelDTO;

  @ValidateNested()
  @IsOptional()
  @Type(() => GetStudySectorDTO)
  studySector?: GetStudySectorDTO;
}
