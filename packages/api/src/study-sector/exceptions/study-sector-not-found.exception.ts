import { HttpException, HttpStatus } from '@nestjs/common';

export class StudySectorNotFoundException extends HttpException {
  constructor(studySectorId: number) {
    super(
      `No study sector found with ID '${studySectorId}'`,
      HttpStatus.NOT_FOUND,
    );
  }
}
