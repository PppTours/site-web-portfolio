import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  BaseStudyLevelEntity,
  StudyLevelEntity,
} from '../entities/study-level.entity';
import {
  STUDY_LEVELS_WITH_SECTOR,
  StudyLevel,
} from '../enums/study-level.enum';
import { StudyLevelNotFoundException } from '../exceptions/study-level-not-found.exception';

@Injectable()
export class StudyLevelService {
  constructor(
    @InjectRepository(StudyLevelEntity)
    private repository: Repository<StudyLevelEntity>,
  ) {}

  public async get(id: number): Promise<StudyLevelEntity> {
    const studyLevel = await this.repository.findOneBy({ id });
    if (!studyLevel) throw new StudyLevelNotFoundException(id);
    return studyLevel;
  }

  public async create(
    baseStudyLevel: BaseStudyLevelEntity,
  ): Promise<StudyLevelEntity> {
    const studyLevel = this.repository.create(baseStudyLevel);
    return await this.repository.save(studyLevel);
  }

  public shouldHaveSector(level: StudyLevel): boolean {
    return STUDY_LEVELS_WITH_SECTOR.includes(level);
  }
}
