import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateStudyLevelRequestDTO } from './dtos/create-study-level-request.dto';
import { StudyLevelDTO } from './dtos/study-level.dto';
import { StudyLevel } from './enums/study-level.enum';
import { StudyLevelRepository } from './study-level.repository';
import { StudySpecialtyDTO } from 'src/study-specialty/dto/study-specialty.dto';

@Injectable()
export class StudyLevelService {
  private static levelsWithoutSpecialty = [StudyLevel.Peip1, StudyLevel.Peip2];

  constructor(private repository: StudyLevelRepository) {}

  public async get(id: number): Promise<StudyLevelDTO> {
    return this.repository.findById(id);
  }

  public async create(
    studyLevel: CreateStudyLevelRequestDTO,
  ): Promise<StudyLevelDTO> {
    return this.repository.insert(studyLevel);
  }

  public assertLevelCanHaveSpecialty(
    level: StudyLevelDTO,
    specialty: StudySpecialtyDTO,
  ) {
    if (specialty && this.shouldHaveSpecialty(level)) {
      throw new HttpException(
        `Study level '${level.name}' can't have specialty`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public shouldHaveSpecialty(level: StudyLevelDTO): boolean {
    return StudyLevelService.levelsWithoutSpecialty.includes(level.name);
  }
}
