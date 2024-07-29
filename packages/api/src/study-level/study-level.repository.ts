import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudyLeveNotFoundException } from './exceptions/study-level-not-found.exception';
import { StudyLevelCreationDTO } from './dtos/study-level-creation.dto';
import { StudyLevelEntity } from './study-level.entity';

@Injectable()
export class StudyLevelRepository {
  constructor(
    @InjectRepository(StudyLevelEntity)
    private repository: Repository<StudyLevelEntity>,
  ) {}

  public async findById(id: number): Promise<StudyLevelEntity> {
    const studyLevel = await this.repository.findOneBy({ id });
    if (!studyLevel) throw new StudyLeveNotFoundException(id);
    return studyLevel;
  }

  public async insert(
    studyLevel: StudyLevelCreationDTO,
  ): Promise<StudyLevelEntity> {
    const newStudyLevel = this.create(studyLevel);
    return await this.save(newStudyLevel);
  }

  public async update(
    id: number,
    studyLevel: StudyLevelCreationDTO,
  ): Promise<StudyLevelEntity> {
    const currentStudyLevel = await this.findById(id);
    const updatedStudyLevel = {
      ...this.create(studyLevel),
      id: currentStudyLevel.id,
    };
    return await this.save(updatedStudyLevel);
  }

  private create(studyLevel: StudyLevelCreationDTO): StudyLevelEntity {
    return this.repository.create(studyLevel);
  }

  private async save(studyLevel: StudyLevelEntity): Promise<StudyLevelEntity> {
    return await this.repository.save(studyLevel);
  }
}
