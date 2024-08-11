import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  BaseStudyLevelEntity,
  StudyLevelEntity,
} from '../entities/study-level.entity';
import {
  STUDY_LEVELS_WITH_SECTOR,
  STUDY_LEVELS_WITHOUT_SECTOR,
  StudyLevel,
} from '../enums/study-level.enum';
import { StudyLevelNotFoundException } from '../exceptions/study-level-not-found.exception';
import { StudyLevelService } from './study-level.service';

describe('StudyLevelService', () => {
  let service: StudyLevelService;
  let repository: jest.Mocked<Partial<Repository<StudyLevelEntity>>>;

  const baseStudyLevel: BaseStudyLevelEntity = {
    name: StudyLevel.Peip1,
  };

  const studyLevel: StudyLevelEntity = {
    ...baseStudyLevel,
    id: 1,
    students: [],
  };

  beforeEach(async () => {
    repository = {
      findOneBy: jest.fn(),
      create: jest.fn().mockReturnValue(studyLevel),
      save: jest.fn().mockResolvedValue(studyLevel),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudyLevelService,
        {
          provide: getRepositoryToken(StudyLevelEntity),
          useValue: repository,
        },
      ],
    }).compile();

    service = module.get<StudyLevelService>(StudyLevelService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('get()', () => {
    it('Should retrieve a study level by id', async () => {
      const id = studyLevel.id;
      repository.findOneBy.mockResolvedValueOnce(studyLevel);
      const result = await service.get(studyLevel.id);

      expect(repository.findOneBy).toHaveBeenCalledTimes(1);
      expect(repository.findOneBy).toHaveBeenCalledWith({ id });
      expect(result).toStrictEqual(studyLevel);
    });

    it('Should throw a StudyLevelNotFoundException if study level is not found', async () => {
      repository.findOneBy.mockResolvedValueOnce(null);

      await expect(service.get(studyLevel.id)).rejects.toThrow(
        new StudyLevelNotFoundException(studyLevel.id),
      );
    });
  });

  describe('create()', () => {
    it('Should create and save a new study level', async () => {
      const result = await service.create(baseStudyLevel);

      expect(repository.create).toHaveBeenCalledTimes(1);
      expect(repository.save).toHaveBeenCalledTimes(1);
      expect(repository.create).toHaveBeenCalledWith(baseStudyLevel);
      expect(repository.save).toHaveBeenCalledWith(studyLevel);
      expect(result).toStrictEqual(studyLevel);
    });
  });

  describe('shouldHaveSector()', () => {
    it.each(STUDY_LEVELS_WITHOUT_SECTOR)(
      'Should return false for study levels without sectors',
      (level) => {
        expect(service.shouldHaveSector(level)).toBe(false);
      },
    );

    it.each(STUDY_LEVELS_WITH_SECTOR)(
      'Should return true for study levels with sectors',
      (level) => {
        expect(service.shouldHaveSector(level)).toBe(true);
      },
    );
  });
});
