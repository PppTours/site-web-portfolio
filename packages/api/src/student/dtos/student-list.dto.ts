import { IsArray, IsNumber, ValidateNested } from 'class-validator';

import { StudentDTO } from './student.dto';

export class StudentListDTO {
  @IsNumber()
  count: number;

  @IsArray({})
  @ValidateNested({ each: true })
  students: StudentDTO[];
}
