import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateStudyLevelRequestDTO } from './dtos/create-study-level-request.dto';
import { StudyLevelDTO } from './dtos/study-level.dto';
import { StudyLevel } from './enums/study-level.enum';
import { StudyLevelRepository } from './study-level.repository';
import { StudySectorDTO } from 'src/study-sector/dto/study-sector.dto';

@Injectable()
export class StudyLevelService {
  private static levelsWithoutSector = [StudyLevel.Peip1, StudyLevel.Peip2];

  constructor(private repository: StudyLevelRepository) {}

  public async get(id: number): Promise<StudyLevelDTO> {
    return this.repository.findById(id);
  }

  public async create(
    studyLevel: CreateStudyLevelRequestDTO,
  ): Promise<StudyLevelDTO> {
    return this.repository.insert(studyLevel);
  }

  public assertLevelCanHaveSector(
    level: StudyLevelDTO,
    sector: StudySectorDTO,
  ) {
    if (sector && this.shouldHaveSector(level)) {
      throw new HttpException(
        `Study level '${level.name}' can't have sector`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public shouldHaveSector(level: StudyLevelDTO): boolean {
    return StudyLevelService.levelsWithoutSector.includes(level.name);
  }
}
