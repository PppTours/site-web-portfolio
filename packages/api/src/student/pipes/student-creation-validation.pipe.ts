import { Injectable, PipeTransform } from '@nestjs/common';
import { StudyLevelService } from 'src/study-level/services/study-level.service';
import { StudySectorService } from 'src/study-sector/services/study-sector.service';

import { CreateStudentDTO } from '../dtos/create-student.dto';
import { BaseStudentEntity } from '../entities/student.entity';
import { StudentValidationService } from '../services/student-validation.service';

@Injectable()
export class StudentCreationValidationPipe implements PipeTransform {
  constructor(
    private studyLevelService: StudyLevelService,
    private studySectorService: StudySectorService,
    private studentValidationService: StudentValidationService,
  ) {}

  async transform(
    createStudentDTO: CreateStudentDTO,
  ): Promise<BaseStudentEntity> {
    const baseStudent = await this.toBaseEntity(createStudentDTO);
    this.studentValidationService.assertStudyLevelAndSectorCompatibility(
      baseStudent.studyLevel,
      baseStudent.studySector,
    );
    return baseStudent;
  }

  private async toBaseEntity(
    createStudentDTO: CreateStudentDTO,
  ): Promise<BaseStudentEntity> {
    return {
      firstName: createStudentDTO.firstName,
      lastName: createStudentDTO.lastName,
      profilePictureUrl: createStudentDTO.profilePictureUrl,
      studyLevel: await this.studyLevelService.get(
        createStudentDTO.studyLevel.id,
      ),
      studySector: createStudentDTO.studySector
        ? await this.studySectorService.get(createStudentDTO.studySector.id)
        : null,
    };
  }
}
