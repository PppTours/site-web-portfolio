import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudySpecialtyDTO } from './dto/study-specialty.dto';
import { StudySpecialtyDtoService } from './dto/study-specialty.dto.service';
import { StudySpecialtyEntity } from './study-specialty.entity';

@Injectable()
export class StudySpecialtyService {
  constructor(
    @InjectRepository(StudySpecialtyEntity)
    private repository: Repository<StudySpecialtyEntity>,
    private dtoService: StudySpecialtyDtoService,
  ) {}

  public async findById(id: number): Promise<StudySpecialtyDTO> {
    const specialty = await this.repository.findOneBy({ id });
    if (!specialty)
      throw new HttpException(
        `No study specialty found with ID '${id}'`,
        HttpStatus.NOT_FOUND,
      );
    return this.dtoService.convertToDTO(specialty);
  }
}
