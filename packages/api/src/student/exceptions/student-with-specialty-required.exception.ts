import { HttpException, HttpStatus } from '@nestjs/common';
import { StudyLevelEntity } from 'src/study-level/entities/study-level.entity';

export class StudentWithSectorRequiredException extends HttpException {
  constructor(studyLevel: StudyLevelEntity) {
    super(
      `'${studyLevel.name}' student should have a sector`,
      HttpStatus.UNPROCESSABLE_ENTITY,
    );
  }
}
