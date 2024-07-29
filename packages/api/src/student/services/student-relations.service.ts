import { Injectable } from '@nestjs/common';
import { CreateStudentRequestDTO } from '../dtos/create-student-request.dto';
import { StudyLevelService } from 'src/study-level/study-level.service';
import { StudySectorService } from 'src/study-sector/study-sector.service';
import { StudyLevelDTO } from 'src/study-level/dtos/study-level.dto';
import { StudySectorDTO } from 'src/study-sector/dto/study-sector.dto';
import { StudentWithNoSectorRequiredException } from '../exceptions/student-with-no-specialty-required.exception';
import { StudentWithSectorRequiredException } from '../exceptions/student-with-specialty-required.exception';
import { StudentRelations } from '../student-relations';

@Injectable()
export class StudentRelationsService {
  constructor(
    private studyLevelService: StudyLevelService,
    private studySectorService: StudySectorService,
  ) {}

  public async getStudentRelationsAndAssertTheirCompatibility(
    studentDTO: CreateStudentRequestDTO,
  ): Promise<StudentRelations> {
    const studentRelations = await this.getStudentRelations(studentDTO);
    this.assertStudyLevelAndSectorCompatibility(
      studentRelations.studyLevel,
      studentRelations.studySector,
    );
    return studentRelations;
  }

  private async getStudentRelations(
    studentDTO: CreateStudentRequestDTO,
  ): Promise<StudentRelations> {
    return {
      studyLevel: await this.studyLevelService.get(studentDTO.level.id),
      studySector: studentDTO.sector
        ? await this.studySectorService.get(studentDTO.sector.id)
        : null,
    };
  }

  private assertStudyLevelAndSectorCompatibility(
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
