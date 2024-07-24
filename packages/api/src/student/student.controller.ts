import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentCreationDTO } from './dto/student-creation.dto';
import { StudentDTO } from './dto/student.dto';

@Controller('students')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get('/')
  public async getAllStudents(): Promise<StudentDTO[]> {
    const students = await this.studentService.findAll();
    return students.map((student) => StudentDTO.fromEntity(student));
  }

  @Post('/')
  public async createStudent(
    @Body() body: StudentCreationDTO,
  ): Promise<StudentDTO> {
    const newStudent = await this.studentService.create(body);
    return StudentDTO.fromEntity(newStudent);
  }
}
