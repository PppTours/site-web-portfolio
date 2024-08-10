import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UUID } from 'crypto';
import { Repository } from 'typeorm';
import { BaseStudentEntity, StudentEntity } from '../entities/student.entity';
import { StudentNotFoundException } from '../exceptions/student-not-found.exception';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private repository: Repository<StudentEntity>,
  ) {}

  public async get(id: UUID): Promise<StudentEntity> {
    const student = await this.repository.findOneBy({ id });
    if (!student) throw new StudentNotFoundException(id);
    return student;
  }

  public async getAll(): Promise<StudentEntity[]> {
    return await this.repository.find({
      relations: {
        studyLevel: true,
        studySector: true,
      },
    });
  }

  public async create(baseStudent: BaseStudentEntity): Promise<StudentEntity> {
    const student = this.repository.create(baseStudent);
    return await this.repository.save(student);
  }
}
