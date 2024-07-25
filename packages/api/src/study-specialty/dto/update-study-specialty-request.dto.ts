import { IsNumber, ValidateNested } from 'class-validator';
import { CreateStudySpecialtyRequestDTO } from './create-study-specialty-request.dto';

export class UpdateStudySpecialtyRequestDTO {
  @IsNumber()
  id: number;

  @ValidateNested()
  data: CreateStudySpecialtyRequestDTO;
}
