import { Injectable } from '@nestjs/common';
import { CreateStudySpecialtyRequestDTO } from './dto/create-study-specialty-request.dto';
import { StudySpecialtyDTO } from './dto/study-specialty.dto';
import { StudySpecialtyRepository } from './study-specialty.repository';

@Injectable()
export class StudySpecialtyService {
  constructor(private repository: StudySpecialtyRepository) {}

  public async get(id: number): Promise<StudySpecialtyDTO> {
    return await this.repository.findById(id);
  }

  public async create(
    studySpecialty: CreateStudySpecialtyRequestDTO,
  ): Promise<StudySpecialtyDTO> {
    return await this.repository.insert(studySpecialty);
  }
}
