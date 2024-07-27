import { Injectable } from '@nestjs/common';
import { StudySectorRepository } from './study-sector.repository';
import { CreateStudySectorRequestDTO } from './dto/create-study-sector-request.dto';
import { StudySectorDTO } from './dto/study-sector.dto';

@Injectable()
export class StudySectorService {
  constructor(private repository: StudySectorRepository) {}

  public async get(id: number): Promise<StudySectorDTO> {
    return await this.repository.findById(id);
  }

  public async create(
    studySector: CreateStudySectorRequestDTO,
  ): Promise<StudySectorDTO> {
    return await this.repository.insert(studySector);
  }
}
