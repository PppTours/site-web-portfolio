import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { GetStudyLevelRequestDTO } from 'src/study-level/dtos/get-study-level-request.dto';
import { GetStudySectorRequestDTO } from 'src/study-sector/dto/get-study-sector-request.dto';

export class CreateStudentRequestDTO {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @IsOptional()
  profilePictureUrl?: string;

  @ValidateNested()
  @Type(() => GetStudyLevelRequestDTO)
  level: GetStudyLevelRequestDTO;

  @ValidateNested()
  @IsOptional()
  @Type(() => GetStudySectorRequestDTO)
  sector?: GetStudySectorRequestDTO;
}
