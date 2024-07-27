import { IsNumber, ValidateNested } from 'class-validator';
import { CreateStudySectorRequestDTO } from './create-study-sector-request.dto';

export class UpdateStudySectorRequestDTO {
  @IsNumber()
  id: number;

  @ValidateNested()
  data: CreateStudySectorRequestDTO;
}
