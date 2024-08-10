import { HttpException, HttpStatus } from '@nestjs/common';

export class StudyLevelNotFoundException extends HttpException {
  constructor(studyLevelId: number) {
    super(
      `No study level found with ID '${studyLevelId}'`,
      HttpStatus.NOT_FOUND,
    );
  }
}
