import { Injectable } from '@nestjs/common';
import { StudyLevelService } from 'src/study-level/study-level.service';
import { StudySectorService } from 'src/study-sector/study-sector.service';
import { CreateStudentRequestDTO } from '../dtos/create-student-request.dto';
import { StudentRelations } from '../student-relations';
import { StudyLevelDTO } from 'src/study-level/dtos/study-level.dto';
import { StudySectorDTO } from 'src/study-sector/dto/study-sector.dto';
import { StudentWithNoSectorRequiredException } from '../exceptions/student-with-no-specialty-required.exception';
import { StudentWithSectorRequiredException } from '../exceptions/student-with-specialty-required.exception';

@Injectable()
export class StudentRelationsService {
  constructor(
    private studyLevelService: StudyLevelService,
    private studySectorService: StudySectorService,
  ) {}
  public async getRelations(
    studentDTO: CreateStudentRequestDTO,
  ): Promise<StudentRelations> {
    return {
      studyLevel: await this.studyLevelService.get(studentDTO.level.id),
      studySector: studentDTO.sector
        ? await this.studySectorService.get(studentDTO.sector.id)
        : null,
    };
  }

  public assertStudyLevelAndSectorCompatibility(
    studyLevel: StudyLevelDTO,
    studySector: StudySectorDTO,
  ) {
    if (this.studyLevelService.shouldHaveSector(studyLevel)) {
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
