import { HttpException, HttpStatus } from '@nestjs/common';
import { StudyLevelDTO } from 'src/study-level/dtos/study-level.dto';

export class StudentWithSpecialtyRequiredException extends HttpException {
  constructor(studyLevel: StudyLevelDTO) {
    super(
      `'${studyLevel.name}' student should have a specialty`,
      HttpStatus.NOT_FOUND,
    );
  }
}
