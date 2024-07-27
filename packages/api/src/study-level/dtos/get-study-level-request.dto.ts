import { IsNumber } from 'class-validator';

export class GetStudyLevelRequestDTO {
  @IsNumber()
  id: number;
}
