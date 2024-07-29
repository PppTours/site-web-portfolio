import { Injectable } from '@nestjs/common';
import { CreateStudySectorRequestDTO } from './dto/create-study-sector-request.dto';
import { StudySectorMapperService } from './services/study-sector-mapper.service';
import { StudySectorEntity } from './study-sector.entity';
import { StudySectorRepository } from './study-sector.repository';

@Injectable()
export class StudySectorService {
  constructor(
    private repository: StudySectorRepository,
    public mapper: StudySectorMapperService,
  ) {}

  public async get(id: number): Promise<StudySectorEntity> {
    return await this.repository.findById(id);
  }

  public async create(
    studySector: CreateStudySectorRequestDTO,
  ): Promise<StudySectorEntity> {
    const studySectorEntity = this.mapper.toEntityWithoutId(studySector);
    return await this.repository.insert(studySectorEntity);
  }
}
