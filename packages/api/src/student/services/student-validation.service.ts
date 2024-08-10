import { Injectable } from '@nestjs/common';
import { StudyLevelEntity } from 'src/study-level/entities/study-level.entity';
import { StudyLevelService } from 'src/study-level/services/study-level.service';
import { StudySectorEntity } from 'src/study-sector/entities/study-sector.entity';
import { StudentWithNoSectorRequiredException } from '../exceptions/student-with-no-specialty-required.exception';
import { StudentWithSectorRequiredException } from '../exceptions/student-with-specialty-required.exception';
import { BaseStudentEntity } from '../entities/student.entity';

@Injectable()
export class StudentValidationService {
  constructor(private studyLevelService: StudyLevelService) {}

  public assertIsValid(student: BaseStudentEntity): void {
    const { studyLevel, studySector } = student;
    this.assertStudyLevelAndSectorCompatibility(studyLevel, studySector);
  }

  public assertStudyLevelAndSectorCompatibility(
    studyLevel: StudyLevelEntity,
    studySector: StudySectorEntity,
  ): void {
    if (this.studyLevelService.shouldHaveSector(studyLevel.name)) {
      if (!studySector) {
        throw new StudentWithSectorRequiredException(studyLevel);
      }
    } else {
      if (studySector) {
        throw new StudentWithNoSectorRequiredException(studyLevel);
      }
    }
  }
}
