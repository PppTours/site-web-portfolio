import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentEntity } from './student.entity';
import { StudentCreationDTO } from './dto/student-creation.dto';

@Controller('students')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get('/')
  public async getAllStudents(): Promise<StudentEntity[]> {
    return await this.studentService.findAll();
  }

  @Post('/')
  public async createStudent(
    @Body() body: StudentCreationDTO,
  ): Promise<StudentEntity> {
    return await this.studentService.create(body);
  }
}
