import { HttpException, HttpStatus } from '@nestjs/common';

export class StudyLeveNotFoundException extends HttpException {
  constructor(studyLevelId: number) {
    super(
      `No study level found with ID '${studyLevelId}'`,
      HttpStatus.NOT_FOUND,
    );
  }
}
