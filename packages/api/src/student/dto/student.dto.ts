import {
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { StudyLevelDTO } from 'src/study-level/dto/study-level.dto';
import { StudySpecialtyDTO } from 'src/study-specialty/dto/study-specialty.dto';
import { StudentEntity } from '../student.entity';

export class StudentDTO {
  @IsNumber()
  id: number;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @IsOptional()
  profilePictureUrl: string | null;

  @ValidateNested()
  level: StudyLevelDTO;

  @ValidateNested()
  specialty: StudySpecialtyDTO;

  private constructor(student: StudentEntity) {
    this.id = student.id;
    this.firstName = student.firstName;
    this.lastName = student.lastName;
    this.profilePictureUrl = student.profilePictureUrl ?? null;
    this.level = StudyLevelDTO.fromEntity(student.level);
    this.specialty = StudySpecialtyDTO.fromEntity(student.specialty);
  }

  static fromEntity(student: StudentEntity): StudentDTO {
    return new StudentDTO(student);
  }
}
