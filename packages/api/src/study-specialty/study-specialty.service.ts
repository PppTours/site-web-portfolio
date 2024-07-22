import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { StudySpecialtyEntity } from './study-specialty.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StudySpecialtyService {
  constructor(
    @InjectRepository(StudySpecialtyEntity)
    private repository: Repository<StudySpecialtyEntity>,
  ) {}

  public async findById(id: number): Promise<StudySpecialtyEntity> {
    const specialty = await this.repository.findOneBy({ id });
    if (!specialty)
      throw new HttpException(
        `No study specialty found with ID '${id}'`,
        HttpStatus.NOT_FOUND,
      );
    return specialty;
  }
}
