import { Test, TestingModule } from '@nestjs/testing';
import { StudyLevelDTO } from '../dtos/study-level.dto';
import { StudyLevel } from '../enums/study-level.enum';
import { StudyLevelMapperService } from './study-level-mapper.service';
import { StudyLevelEntity } from '../entities/study-level.entity';

describe('StudyLevelMapperService', () => {
  let service: StudyLevelMapperService;

  const mockStudyLevel: StudyLevelEntity = {
    id: 1,
    name: StudyLevel.Peip1,
    students: [],
  };

  const mockStudyLevelDTO = new StudyLevelDTO();
  mockStudyLevelDTO.name = mockStudyLevel.name;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudyLevelMapperService],
    }).compile();

    service = module.get<StudyLevelMapperService>(StudyLevelMapperService);
  });

  describe('toDTO()', () => {
    it('Should convert an entity to DTO', () => {
      const result = service.toDTO(mockStudyLevel);
      expect(result).toStrictEqual(mockStudyLevelDTO);
    });
  });
});
