import { IsNumber } from 'class-validator';

export class GetStudySpecialtyRequestDTO {
  @IsNumber()
  id: number;
}
