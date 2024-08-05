import { Injectable } from '@nestjs/common';
import { UUID } from 'crypto';
import { CreateStudentRequestDTO } from './dtos/create-student-request.dto';
import { UpdateStudentRequestDTO } from './dtos/update-student-request.dto';
import { StudentMapperService } from './services/student-mapper.service';
import { StudentRelationsService } from './services/student-relations.service';
import { StudentEntity } from './student.entity';
import { StudentRepository } from './student.repository';

@Injectable()
export class StudentService {
  constructor(
    private repository: StudentRepository,
    private mapper: StudentMapperService,
    private studentRelationsService: StudentRelationsService,
  ) {}

  public async get(id: UUID): Promise<StudentEntity> {
    return await this.repository.findById(id);
  }

  public async getAll(): Promise<StudentEntity[]> {
    return await this.repository.findAll();
  }

  public async create(
    newStudentDTO: CreateStudentRequestDTO,
  ): Promise<StudentEntity> {
    const studentRelations = await this.studentRelationsService.getRelations(
      newStudentDTO,
    );
    const newStudent = this.mapper.toEntityWithoutId(
      newStudentDTO,
      studentRelations,
    );
    return await this.repository.insert(newStudent);
  }

  public async update(
    updatedStudentDTO: UpdateStudentRequestDTO,
  ): Promise<StudentEntity> {
    const studentRelations = await this.studentRelationsService.getRelations(
      updatedStudentDTO.data,
    );
    const updatedStudent = this.mapper.toEntityWithoutId(
      updatedStudentDTO.data,
      studentRelations,
    );
    return await this.repository.update(updatedStudentDTO.id, updatedStudent);
  }
}
