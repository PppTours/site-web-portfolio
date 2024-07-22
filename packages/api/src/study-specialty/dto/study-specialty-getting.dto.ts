import { IsNumber } from 'class-validator';

export class StudySpecialtyGettingDTO {
  @IsNumber()
  id: number;
}
