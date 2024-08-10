import { HttpException, HttpStatus } from '@nestjs/common';
import { StudyLevelEntity } from 'src/study-level/entities/study-level.entity';

export class StudentWithNoSectorRequiredException extends HttpException {
  constructor(studyLevel: StudyLevelEntity) {
    super(
      `'${studyLevel.name}' student can't have sector`,
      HttpStatus.UNPROCESSABLE_ENTITY,
    );
  }
}
