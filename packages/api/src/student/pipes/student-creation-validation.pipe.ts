import { Injectable, PipeTransform } from '@nestjs/common';
import { CreateStudentRequestDTO } from '../dtos/create-student-request.dto';
import { StudentRelationsService } from '../services/student-relations.service';

@Injectable()
export class StudentCreationValidationPipe implements PipeTransform {
  constructor(private studentRelationsService: StudentRelationsService) {}

  async transform(newStudentDTO: CreateStudentRequestDTO) {
    const studentRelations = await this.studentRelationsService.getRelations(
      newStudentDTO,
    );
    this.studentRelationsService.assertStudyLevelAndSectorCompatibility(
      studentRelations.studyLevel,
      studentRelations.studySector,
    );
    return newStudentDTO;
  }
}
