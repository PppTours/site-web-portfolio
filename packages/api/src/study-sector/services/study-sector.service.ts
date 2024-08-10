import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudySectorNotFoundException } from '../exceptions/study-sector-not-found.exception';
import {
  BaseStudySectorEntity,
  StudySectorEntity,
} from '../entities/study-sector.entity';

@Injectable()
export class StudySectorService {
  constructor(
    @InjectRepository(StudySectorEntity)
    private repository: Repository<StudySectorEntity>,
  ) {}

  public async get(id: number): Promise<StudySectorEntity> {
    const sector = await this.repository.findOneBy({ id });
    if (!sector) throw new StudySectorNotFoundException(id);
    return sector;
  }

  public async create(
    baseStudySector: BaseStudySectorEntity,
  ): Promise<StudySectorEntity> {
    const studySector = this.repository.create(baseStudySector);
    return await this.repository.save(studySector);
  }
}
