import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  BaseStudySectorEntity,
  StudySectorEntity,
} from '../entities/study-sector.entity';
import { StudySectorInitialism } from '../enums/study-sector.enum';
import { StudySectorNotFoundException } from '../exceptions/study-sector-not-found.exception';
import { StudySectorService } from './study-sector.service';

describe('StudySectorService', () => {
  let service: StudySectorService;
  let repository: jest.Mocked<Partial<Repository<StudySectorEntity>>>;

  const baseStudySector: BaseStudySectorEntity = {
    initialism: StudySectorInitialism.DAE,
    title: 'Test title',
  };

  const studySector: StudySectorEntity = {
    ...baseStudySector,
    id: 1,
    students: [],
  };

  beforeEach(async () => {
    repository = {
      findOneBy: jest.fn(),
      create: jest.fn().mockReturnValue(studySector),
      save: jest.fn().mockResolvedValue(studySector),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudySectorService,
        {
          provide: getRepositoryToken(StudySectorEntity),
          useValue: repository,
        },
      ],
    }).compile();

    service = module.get<StudySectorService>(StudySectorService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('get()', () => {
    it('Should retrieve a study sector by id', async () => {
      const id = studySector.id;
      repository.findOneBy.mockResolvedValueOnce(studySector);
      const result = await service.get(id);

      expect(repository.findOneBy).toHaveBeenCalledTimes(1);
      expect(repository.findOneBy).toHaveBeenCalledWith({ id });
      expect(result).toStrictEqual(studySector);
    });

    it('Should throw a StudySectorNotFoundException if study sector is not found', async () => {
      const exception = new StudySectorNotFoundException(studySector.id);
      repository.findOneBy.mockResolvedValueOnce(null);

      await expect(service.get(studySector.id)).rejects.toThrow(exception);
    });
  });

  describe('create()', () => {
    it('Should create and save a new study sector', async () => {
      const result = await service.create(baseStudySector);

      expect(repository.create).toHaveBeenCalledTimes(1);
      expect(repository.save).toHaveBeenCalledTimes(1);
      expect(repository.create).toHaveBeenCalledWith(baseStudySector);
      expect(repository.save).toHaveBeenCalledWith(studySector);
      expect(result).toStrictEqual(studySector);
    });
  });
});
