import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudyLevelDTO } from './dto/study-level.dto';
import { StudyLevelDtoService } from './dto/study-level.dto.service';
import { StudyLevelEntity } from './study-level.entity';
import { CreateStudyLevelRequestDTO } from './dto/create-study-level-request.dto';
import { UpdateStudyLevelRequestDTO } from './dto/update-study-level-request.dto';

@Injectable()
export class StudyLevelService {
  constructor(
    @InjectRepository(StudyLevelEntity)
    private repository: Repository<StudyLevelEntity>,
    private dtoService: StudyLevelDtoService,
  ) {}

  public async findById(id: number): Promise<StudyLevelDTO> {
    const level = await this.repository.findOneBy({ id });
    if (!level)
      throw new HttpException(
        `No study level found with ID '${id}'`,
        HttpStatus.NOT_FOUND,
      );
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
