import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UUID } from 'crypto';
import { Repository } from 'typeorm';
import { StudentNotFoundException } from './exceptions/student-not-found.exception';
import { StudentEntity } from './student.entity';
import { StudentCreationDTO } from './dtos/student-creation.dto';

@Injectable()
export class StudentRepository {
  constructor(
    @InjectRepository(StudentEntity)
    private repository: Repository<StudentEntity>,
  ) {}

  public async findById(id: UUID): Promise<StudentEntity> {
    const student = await this.repository.findOneBy({ id });
    if (!student) throw new StudentNotFoundException(id);
    return student;
  }

  public async findAll(): Promise<StudentEntity[]> {
    return await this.repository.find({
      relations: {
        studyLevel: true,
        studySector: true,
      },
    });
  }

  public async insert(student: StudentCreationDTO): Promise<StudentEntity> {
    const newStudent = await this.create(student);
    return await this.save(newStudent);
  }

  public async update(
    id: UUID,
    student: StudentCreationDTO,
  ): Promise<StudentEntity> {
    const currentStudent = await this.findById(id);
    const updatedStudent = {
      ...this.create(student),
      id: currentStudent.id,
    };
    return await this.save(updatedStudent);
  }

  private create(student: StudentCreationDTO): StudentEntity {
    return this.repository.create(student);
  }

  private async save(student: StudentEntity): Promise<StudentEntity> {
    return await this.repository.save(student);
  }
}
