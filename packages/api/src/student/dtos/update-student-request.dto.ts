import { IsUUID, ValidateNested } from 'class-validator';
import { UUID } from 'crypto';
import { CreateStudentRequestDTO } from './create-student-request.dto';

export class UpdateStudentRequestDTO {
  @IsUUID()
  id: UUID;

  @ValidateNested()
  data: CreateStudentRequestDTO;
}
