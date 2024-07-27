import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentRequestDTO } from './dtos/create-student-request.dto';
import { StudentDTO } from './dtos/student.dto';
import { StudentListDTO } from './dtos/student-list.dto';

@Controller('students')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get('/')
  public async getAllStudents(): Promise<StudentListDTO> {
    return await this.studentService.getAll();
  }

  @Post('/')
  public async createStudent(
    @Body() body: CreateStudentRequestDTO,
  ): Promise<StudentDTO> {
    return await this.studentService.create(body);
  }
}
