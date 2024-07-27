import { HttpException, HttpStatus } from '@nestjs/common';
import { UUID } from 'crypto';

export class StudentNotFoundException extends HttpException {
  constructor(studentId: UUID) {
    super(`No student found with ID '${studentId}'`, HttpStatus.NOT_FOUND);
  }
}
