import { IsNumber } from 'class-validator';

export class StudyLevelGettingDTO {
  @IsNumber()
  id: number;
}
