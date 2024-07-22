import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { StudyLevelEntity } from './study-level.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StudyLevelService {
  constructor(
    @InjectRepository(StudyLevelEntity)
    private repository: Repository<StudyLevelEntity>,
  ) {}

  public async findById(id: number): Promise<StudyLevelEntity> {
    const level = await this.repository.findOneBy({ id });
    if (!level)
      throw new HttpException(
        `No study level found with ID '${id}'`,
        HttpStatus.NOT_FOUND,
      );
    return level;
  }
}
