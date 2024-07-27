import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UUID } from 'crypto';
import { StudyLevelService } from 'src/study-level/study-level.service';
import { StudySpecialtyService } from 'src/study-specialty/study-specialty.service';
import { Repository } from 'typeorm';
import { CreateStudentRequestDTO } from './dtos/create-student-request.dto';
import { StudentListDTO } from './dtos/student-list.dto';
import { StudentDTO } from './dtos/student.dto';
import { StudentDtoService } from './dtos/student.dto.service';
import { UpdateStudentRequestDTO } from './dtos/update-student-request.dto';
import { StudentEntity } from './student.entity';
import { StudentNotFoundException } from './exceptions/student-not-found.exception';

@Injectable()
export class StudentRepository {
  constructor(
    @InjectRepository(StudentEntity)
    private repository: Repository<StudentEntity>,
    private dtoService: StudentDtoService,
    private studyLevelService: StudyLevelService,
    private studySpecialtyService: StudySpecialtyService,
  ) {}

  public async findById(id: UUID): Promise<StudentDTO> {
    const student = await this.repository.findOneBy({ id });
    if (!student) throw new StudentNotFoundException(id);
    return this.dtoService.convertToDTO(student);
  }

  public async findAll(): Promise<StudentListDTO> {
    const students = await this.repository.find({
      relations: {
        level: true,
        specialty: true,
      },
    });
    return this.dtoService.convertToListDTO(students);
  }

  public async insert(
    studentDTO: CreateStudentRequestDTO,
  ): Promise<StudentDTO> {
    const studentEntity = await this.create(studentDTO);
    return await this.save(studentEntity);
  }

  public async update(student: UpdateStudentRequestDTO): Promise<StudentDTO> {
    const currentStudent = await this.findById(student.id);
    const studentEntity = {
      ...(await this.create(student.data)),
      id: currentStudent.id,
    };
    return await this.save(studentEntity);
  }

  private async create(
    studentDTO: CreateStudentRequestDTO,
  ): Promise<StudentEntity> {
    const level = await this.studyLevelService.get(studentDTO.level.id);
    const specialty = studentDTO.specialty
      ? await this.studySpecialtyService.get(studentDTO.specialty.id)
      : null;
    return this.repository.create({
      firstName: studentDTO.firstName,
      lastName: studentDTO.lastName,
      profilePictureUrl: studentDTO.profilePictureUrl,
      level,
      specialty,
    });
  }

  private async save(student: StudentEntity): Promise<StudentDTO> {
    const newStudent = await this.repository.save(student);
    return this.dtoService.convertToDTO(newStudent);
  }
}
