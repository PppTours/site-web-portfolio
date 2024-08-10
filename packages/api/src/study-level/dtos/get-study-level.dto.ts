import { IsNumber } from 'class-validator';

export class GetStudyLevelDTO {
  @IsNumber()
  id: number;
}
