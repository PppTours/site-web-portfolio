import { Injectable } from '@nestjs/common';
import { StudySectorDTO } from '../dto/study-sector.dto';
import { StudySectorEntity } from '../entities/study-sector.entity';

@Injectable()
export class StudySectorMapperService {
  public toDTO(studySector: StudySectorEntity): StudySectorDTO {
    const dto = new StudySectorDTO();
    dto.initialism = studySector.initialism;
    dto.title = studySector.title;
    return dto;
  }
}
