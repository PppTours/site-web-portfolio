import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudyLevelEntity } from './study-level.entity';
import { StudyLevelDTO } from './dtos/study-level.dto';
import { CreateStudyLevelRequestDTO } from './dtos/create-study-level-request.dto';
import { StudyLevelDtoService } from './dtos/study-level.dto.service';
import { UpdateStudyLevelRequestDTO } from './dtos/update-study-level-request.dto';
import { StudyLeveNotFoundException } from './exceptions/study-level-not-found.exception';

@Injectable()
export class StudyLevelRepository {
  constructor(
    @InjectRepository(StudyLevelEntity)
    private repository: Repository<StudyLevelEntity>,
    private dtoService: StudyLevelDtoService,
  ) {}

  public async findById(id: number): Promise<StudyLevelDTO> {
    const level = await this.repository.findOneBy({ id });
    if (!level) throw new StudyLeveNotFoundException(id);
    return this.dtoService.convertToDTO(level);
  }

  public async insert(
    studyLevel: CreateStudyLevelRequestDTO,
  ): Promise<StudyLevelDTO> {
    const studyLevelEntity = this.create(studyLevel);
    return await this.save(studyLevelEntity);
  }

  public async update(
    studyLevel: UpdateStudyLevelRequestDTO,
  ): Promise<StudyLevelDTO> {
    const currentStudyLevel = await this.findById(studyLevel.id);
    const studyLevelEntity = {
      ...this.create(studyLevel.data),
      id: currentStudyLevel.id,
    };
    return await this.save(studyLevelEntity);
  }

  private create(studyLevel: CreateStudyLevelRequestDTO): StudyLevelEntity {
    return this.repository.create({
      name: studyLevel.name,
    });
  }

  private async save(studyLevel: StudyLevelEntity): Promise<StudyLevelDTO> {
    const newStudyLevel = await this.repository.save(studyLevel);
    return this.dtoService.convertToDTO(newStudyLevel);
  }
}
