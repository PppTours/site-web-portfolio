import { Injectable } from '@nestjs/common';
import { CreateStudyLevelRequestDTO } from './dtos/create-study-level-request.dto';
import { StudyLevelDTO } from './dtos/study-level.dto';
import { StudyLevelMapperService } from './services/study-level-mapper.service';
import { StudyLevel } from './enums/study-level.enum';
import { StudyLevelRepository } from './study-level.repository';
import { StudyLevelEntity } from './study-level.entity';

@Injectable()
export class StudyLevelService {
  private static levelsWithoutSector = [StudyLevel.Peip1, StudyLevel.Peip2];

  constructor(
    private repository: StudyLevelRepository,
    public mapper: StudyLevelMapperService,
  ) {}

  public async get(id: number): Promise<StudyLevelEntity> {
    return await this.repository.findById(id);
  }

  public async create(
    studyLevel: CreateStudyLevelRequestDTO,
  ): Promise<StudyLevelEntity> {
    const studyLevelEntity = this.mapper.toEntityWithoutId(studyLevel);
    return await this.repository.insert(studyLevelEntity);
  }

  public shouldHaveSector(level: StudyLevelDTO): boolean {
    return !StudyLevelService.levelsWithoutSector.includes(level.name);
  }
}
