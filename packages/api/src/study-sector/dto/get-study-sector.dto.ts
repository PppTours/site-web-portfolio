import { IsNumber } from 'class-validator';

export class GetStudySectorDTO {
  @IsNumber()
  id: number;
}
