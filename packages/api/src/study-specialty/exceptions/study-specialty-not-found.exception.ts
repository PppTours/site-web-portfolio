import { HttpException, HttpStatus } from '@nestjs/common';

export class StudySpecialtyNotFoundException extends HttpException {
  constructor(studySpecialtyId: number) {
    super(
      `No study specialty found with ID '${studySpecialtyId}'`,
      HttpStatus.NOT_FOUND,
    );
  }
}
