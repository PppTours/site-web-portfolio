import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudySpecialtyRequestDTO } from './dto/create-study-specialty-request.dto';
import { StudySpecialtyDTO } from './dto/study-specialty.dto';
import { StudySpecialtyDtoService } from './dto/study-specialty.dto.service';
import { UpdateStudySpecialtyRequestDTO } from './dto/update-study-specialty-request.dto';
import { StudySpecialtyEntity } from './study-specialty.entity';
import { StudySpecialtyNotFoundException } from './exceptions/study-specialty-not-found.exception';

@Injectable()
export class StudySpecialtyRepository {
  constructor(
    @InjectRepository(StudySpecialtyEntity)
    private repository: Repository<StudySpecialtyEntity>,
    private dtoService: StudySpecialtyDtoService,
  ) {}

  public async findById(id: number): Promise<StudySpecialtyDTO> {
    const specialty = await this.repository.findOneBy({ id });
    if (!specialty) throw new StudySpecialtyNotFoundException(id);
    return this.dtoService.convertToDTO(specialty);
  }

  public async insert(
    studySpecialty: CreateStudySpecialtyRequestDTO,
  ): Promise<StudySpecialtyDTO> {
    const studySpecialtyEntity = this.create(studySpecialty);
    return await this.save(studySpecialtyEntity);
  }

  public async update(
    studySpecialty: UpdateStudySpecialtyRequestDTO,
  ): Promise<StudySpecialtyDTO> {
    const currentStudySpecialty = await this.findById(studySpecialty.id);
    const studySpecialtyEntity = {
      ...this.create(studySpecialty.data),
      id: currentStudySpecialty.id,
    };
    return await this.save(studySpecialtyEntity);
  }

  private create(
    studySpecialty: CreateStudySpecialtyRequestDTO,
  ): StudySpecialtyEntity {
    return this.repository.create({
      initialism: studySpecialty.initialism,
      title: studySpecialty.title,
    });
  }

  public async save(
    studySpecialty: StudySpecialtyEntity,
  ): Promise<StudySpecialtyDTO> {
    const savedStudySpecialty = await this.repository.save(studySpecialty);
    return this.dtoService.convertToDTO(savedStudySpecialty);
  }
}
