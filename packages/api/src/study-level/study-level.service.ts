import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudyLevelDTO } from './dto/study-level.dto';
import { StudyLevelDtoService } from './dto/study-level.dto.service';
import { StudyLevelEntity } from './study-level.entity';

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
}
