import { IsEnum, IsNumber, IsString } from 'class-validator';
import { StudySpecialtyEntity } from '../study-specialty.entity';
import { StudySpecialtyInitialism } from '../study-specialty.enum';

export class StudySpecialtyDTO {
  @IsNumber()
  id: number;

  @IsEnum(StudySpecialtyInitialism)
  initialism: StudySpecialtyInitialism;

  @IsString()
  title: string;

  private constructor(studySpecialty: StudySpecialtyEntity) {
    this.id = studySpecialty.id;
    this.initialism = studySpecialty.initialism;
    this.title = studySpecialty.title;
  }

  static fromEntity(studySpecialty: StudySpecialtyEntity): StudySpecialtyDTO {
    return new StudySpecialtyDTO(studySpecialty);
  }
}
