import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudySectorNotFoundException } from './exceptions/study-sector-not-found.exception';
import { StudySectorEntity } from './study-sector.entity';
import { StudySectorCreationDTO } from './dto/study-sector-creation.dto';

@Injectable()
export class StudySectorRepository {
  constructor(
    @InjectRepository(StudySectorEntity)
    private repository: Repository<StudySectorEntity>,
  ) {}

  public async findById(id: number): Promise<StudySectorEntity> {
    const sector = await this.repository.findOneBy({ id });
    if (!sector) throw new StudySectorNotFoundException(id);
    return sector;
  }

  public async insert(
    studySector: StudySectorCreationDTO,
  ): Promise<StudySectorEntity> {
    const newStudySector = this.create(studySector);
    return await this.save(newStudySector);
  }

  public async update(
    id: number,
    studySector: StudySectorCreationDTO,
  ): Promise<StudySectorEntity> {
    const currentStudySector = await this.findById(id);
    const updatedStudySector = {
      ...this.create(studySector),
      id: currentStudySector.id,
    };
    return await this.save(updatedStudySector);
  }

  private create(studySector: StudySectorCreationDTO): StudySectorEntity {
    return this.repository.create(studySector);
  }

  public async save(
    studySector: StudySectorEntity,
  ): Promise<StudySectorEntity> {
    return await this.repository.save(studySector);
  }
}
