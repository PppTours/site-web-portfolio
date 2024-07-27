import { Injectable } from '@nestjs/common';
import { DtoService } from 'src/interfaces/dto-service.interface';
import { StudySectorEntity } from '../study-sector.entity';
import { StudySectorDTO } from './study-sector.dto';

@Injectable()
export class StudySectorDtoService
  implements DtoService<StudySectorEntity, StudySectorDTO>
{
  public convertToDTO(studySector: StudySectorEntity): StudySectorDTO {
    const dto = new StudySectorDTO();
    dto.id = studySector.id;
    dto.initialism = studySector.initialism;
    dto.title = studySector.title;
    return dto;
  }
}
