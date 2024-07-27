import { IsNumber } from 'class-validator';

export class GetStudySectorRequestDTO {
  @IsNumber()
  id: number;
}
