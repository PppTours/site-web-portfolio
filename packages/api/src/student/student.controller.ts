import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentCreationDTO } from './dto/student-creation.dto';
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
    @Body() body: StudentCreationDTO,
  ): Promise<StudentDTO> {
    return await this.studentService.create(body);
  }
}
