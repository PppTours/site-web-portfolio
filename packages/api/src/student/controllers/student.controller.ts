import { Body, Controller, Get, Post } from '@nestjs/common';

import { StudentDTO } from '../dtos/student.dto';
import { StudentListDTO } from '../dtos/student-list.dto';
import { BaseStudentEntity } from '../entities/student.entity';
import { StudentCreationValidationPipe } from '../pipes/student-creation-validation.pipe';
import { StudentService } from '../services/student.service';
import { StudentMapperService } from '../services/student-mapper.service';

@Controller('students')
export class StudentController {
  constructor(
    private studentService: StudentService,
    private mapper: StudentMapperService,
  ) {}

  @Get('/')
  public async getAll(): Promise<StudentListDTO> {
    const students = await this.studentService.getAll();
    return this.mapper.toListDTO(students);
  }

  @Post('/')
  public async create(
    @Body(StudentCreationValidationPipe) body: BaseStudentEntity,
  ): Promise<StudentDTO> {
    const newStudent = await this.studentService.create(body);
    return this.mapper.toDTO(newStudent);
  }
}
