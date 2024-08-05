import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentRequestDTO } from './dtos/create-student-request.dto';
import { StudentDTO } from './dtos/student.dto';
import { StudentListDTO } from './dtos/student-list.dto';
import { StudentMapperService } from './services/student-mapper.service';
import { StudentCreationValidationPipe } from './pipes/student-creation-validation.pipe';

@Controller('students')
export class StudentController {
  constructor(
    private studentService: StudentService,
    private mapper: StudentMapperService,
  ) {}

  @Get('/')
  public async getAllStudents(): Promise<StudentListDTO> {
    const students = await this.studentService.getAll();
    return this.mapper.toListDTO(students);
  }

  @Post('/')
  public async createStudent(
    @Body(StudentCreationValidationPipe) body: CreateStudentRequestDTO,
  ): Promise<StudentDTO> {
    const newStudent = await this.studentService.create(body);
    return this.mapper.toDTO(newStudent);
  }
}
