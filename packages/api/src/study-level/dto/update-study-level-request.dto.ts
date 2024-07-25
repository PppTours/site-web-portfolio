import { IsNumber, ValidateNested } from 'class-validator';
import { CreateStudyLevelRequestDTO } from './create-study-level-request.dto';

export class UpdateStudyLevelRequestDTO {
  @IsNumber()
  id: number;

  @ValidateNested()
  data: CreateStudyLevelRequestDTO;
}
