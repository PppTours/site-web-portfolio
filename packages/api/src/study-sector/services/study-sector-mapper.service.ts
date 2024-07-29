import { Injectable } from '@nestjs/common';
import { StudySectorEntity } from '../study-sector.entity';
import { StudySectorDTO } from '../dto/study-sector.dto';
import { CreateStudySectorRequestDTO } from '../dto/create-study-sector-request.dto';
import { StudySectorCreationDTO } from '../dto/study-sector-creation.dto';

@Injectable()
export class StudySectorMapperService {
  public toDTO(studySector: StudySectorEntity): StudySectorDTO {
    const dto = new StudySectorDTO();
    dto.initialism = studySector.initialism;
    dto.title = studySector.title;
    return dto;
  }

  public toEntityWithoutId(
    studySector: CreateStudySectorRequestDTO,
  ): StudySectorCreationDTO {
    return {
      initialism: studySector.initialism,
      title: studySector.title,
    };
  }
}
