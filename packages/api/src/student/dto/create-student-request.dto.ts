import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { GetStudyLevelRequestDTO } from 'src/study-level/dto/get-study-level-request.dto';
import { GetStudySpecialtyRequestDTO } from 'src/study-specialty/dto/get-study-specialty-request.dto';

export class CreateStudentRequestDTO {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @IsOptional()
  profilePictureUrl?: string;

  @ValidateNested()
  level: GetStudyLevelRequestDTO;

  @ValidateNested()
  specialty: GetStudySpecialtyRequestDTO;
}
