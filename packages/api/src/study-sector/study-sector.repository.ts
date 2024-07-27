import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudySectorRequestDTO } from './dto/create-study-sector-request.dto';
import { StudySectorDTO } from './dto/study-sector.dto';
import { StudySectorDtoService } from './dto/study-sector.dto.service';
import { UpdateStudySectorRequestDTO } from './dto/update-study-sector-request.dto';
import { StudySectorEntity } from './study-sector.entity';
import { StudySectorNotFoundException } from './exceptions/study-sector-not-found.exception';

@Injectable()
export class StudySectorRepository {
  constructor(
    @InjectRepository(StudySectorEntity)
    private repository: Repository<StudySectorEntity>,
    private dtoService: StudySectorDtoService,
  ) {}

  public async findById(id: number): Promise<StudySectorDTO> {
    const sector = await this.repository.findOneBy({ id });
    if (!sector) throw new StudySectorNotFoundException(id);
    return this.dtoService.convertToDTO(sector);
  }

  public async insert(
    studySector: CreateStudySectorRequestDTO,
  ): Promise<StudySectorDTO> {
    const studySectorEntity = this.create(studySector);
    return await this.save(studySectorEntity);
  }

  public async update(
    studySector: UpdateStudySectorRequestDTO,
  ): Promise<StudySectorDTO> {
    const currentStudySector = await this.findById(studySector.id);
    const studySectorEntity = {
      ...this.create(studySector.data),
      id: currentStudySector.id,
    };
    return await this.save(studySectorEntity);
  }

  private create(studySector: CreateStudySectorRequestDTO): StudySectorEntity {
    return this.repository.create({
      initialism: studySector.initialism,
      title: studySector.title,
    });
  }

  public async save(studySector: StudySectorEntity): Promise<StudySectorDTO> {
    const savedStudySector = await this.repository.save(studySector);
    return this.dtoService.convertToDTO(savedStudySector);
  }
}
