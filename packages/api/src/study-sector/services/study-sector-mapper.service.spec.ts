import { TestingModule, Test } from '@nestjs/testing';
import { StudySectorDTO } from '../dto/study-sector.dto';
import { StudySectorEntity } from '../entities/study-sector.entity';
import { StudySectorMapperService } from './study-sector-mapper.service';
import { StudySectorInitialism } from '../enums/study-sector.enum';

describe('StudySectorMapperService', () => {
  let service: StudySectorMapperService;

  const mockStudySector: StudySectorEntity = {
    id: 1,
    initialism: StudySectorInitialism.DAE,
    title: 'Test title',
    students: [],
  };

  const mockStudySectorDTO = new StudySectorDTO();
  mockStudySectorDTO.initialism = mockStudySector.initialism;
  mockStudySectorDTO.title = mockStudySector.title;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudySectorMapperService],
    }).compile();

    service = module.get<StudySectorMapperService>(StudySectorMapperService);
  });

  describe('toDTO()', () => {
    it('Should convert an entity to DTO', () => {
      const result = service.toDTO(mockStudySector);
      expect(result).toStrictEqual(mockStudySectorDTO);
    });
  });
});
