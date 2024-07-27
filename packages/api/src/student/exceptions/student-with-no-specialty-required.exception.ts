import { HttpException, HttpStatus } from '@nestjs/common';
import { StudyLevelDTO } from 'src/study-level/dtos/study-level.dto';

export class StudentWithNoSectorRequiredException extends HttpException {
  constructor(studyLevel: StudyLevelDTO) {
    super(
      `'${studyLevel.name}' student can't have sector`,
      HttpStatus.NOT_FOUND,
    );
  }
}
