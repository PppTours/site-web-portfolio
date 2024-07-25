import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentRequestDTO } from './dto/create-student-request.dto';
import { StudentDTO } from './dto/student.dto';
import { StudentListDTO } from './dto/student-list.dto';

@Controller('students')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get('/')
  public async getAllStudents(): Promise<StudentListDTO> {
    return await this.studentService.findAll();
  }

  @Post('/')
  public async createStudent(
    @Body() body: CreateStudentRequestDTO,
  ): Promise<StudentDTO> {
    return await this.studentService.insert(body);
  }
}
