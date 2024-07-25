import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudyLevelService } from 'src/study-level/study-level.service';
import { StudySpecialtyService } from 'src/study-specialty/study-specialty.service';
import { Repository } from 'typeorm';
import { StudentCreationDTO } from './dto/student-creation.dto';
import { StudentListDTO } from './dto/student-list.dto';
import { StudentDTO } from './dto/student.dto';
import { StudentDtoService } from './dto/student.dto.service';
import { StudentEntity } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private repository: Repository<StudentEntity>,
    private dtoService: StudentDtoService,
    private studyLevelService: StudyLevelService,
    private studySpecialtyService: StudySpecialtyService,
  ) {}

  public async findAll(): Promise<StudentListDTO> {
    const students = await this.repository.find({
      relations: {
        level: true,
        specialty: true,
      },
    });
    return this.dtoService.convertToListDTO(students);
  }

  public async create(studentDTO: StudentCreationDTO): Promise<StudentDTO> {
    const level = await this.studyLevelService.findById(studentDTO.level.id);
    const specialty = await this.studySpecialtyService.findById(
      studentDTO.specialty.id,
    );
    const newStudent = await this.repository.save({
      firstName: studentDTO.firstName,
      lastName: studentDTO.lastName,
      profilePictureUrl: studentDTO.profilePictureUrl,
      level,
      specialty,
    });
    return this.dtoService.convertToDTO(newStudent);
  }
}
