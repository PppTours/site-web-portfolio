import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { StudyLevelEntity } from 'src/study-level/entities/study-level.entity';
import { StudyLevel } from 'src/study-level/enums/study-level.enum';
import { StudyLevelService } from 'src/study-level/services/study-level.service';
import { StudySectorEntity } from 'src/study-sector/entities/study-sector.entity';
import { StudySectorInitialism } from 'src/study-sector/enums/study-sector.enum';
import { StudySectorService } from 'src/study-sector/services/study-sector.service';
import { Repository } from 'typeorm';
import { BaseStudentEntity, StudentEntity } from '../entities/student.entity';
import { StudentNotFoundException } from '../exceptions/student-not-found.exception';
import { StudentValidationService } from './student-validation.service';
import { StudentService } from './student.service';

describe('StudentService', () => {
  let service: StudentService;
  let repository: jest.Mocked<Partial<Repository<StudentEntity>>>;
  let studyLevelService: jest.Mocked<Partial<StudyLevelService>>;
  let studySectorService: jest.Mocked<Partial<StudySectorService>>;

  const studyLevelWithoutStudySector: StudyLevelEntity = {
    id: 1,
    name: StudyLevel.Peip1,
    students: [],
  };

  const studyLevel: StudyLevelEntity = {
    id: 1,
    name: StudyLevel.Year3,
    students: [],
  };

  const studySector: StudySectorEntity = {
    id: 1,
    initialism: StudySectorInitialism.DAE,
    title: 'DAE',
    students: [],
  };

  const baseStudent: BaseStudentEntity = {
    firstName: 'John',
    lastName: 'Doe',
    profilePictureUrl: 'www.images.com/test.png',
    studyLevel: studyLevel,
    studySector: studySector,
  };

  const baseStudentWithNullFields: BaseStudentEntity = {
    ...baseStudent,
    profilePictureUrl: null,
    studyLevel: studyLevelWithoutStudySector,
    studySector: null,
  };

  const student: StudentEntity = {
    ...baseStudent,
    id: '67d6cab4-89f1-4c53-9d5d-1b3c78a18915',
  };

  const studentWithNullFields: StudentEntity = {
    ...baseStudentWithNullFields,
    id: student.id,
  };

  const studentList: StudentEntity[] = [student, studentWithNullFields];

  beforeEach(async () => {
    repository = {
      findOneBy: jest.fn().mockResolvedValue(student),
      find: jest.fn().mockResolvedValue(studentList),
      create: jest.fn().mockReturnValue(student),
      save: jest.fn().mockResolvedValue(student),
    };

    studyLevelService = {
      get: jest.fn().mockResolvedValue(studyLevel),
      shouldHaveSector: jest.fn().mockReturnValue(true),
    };

    studySectorService = {
      get: jest.fn().mockResolvedValue(studySector),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudentService,
        StudentValidationService,
        StudyLevelService,
        StudySectorService,
        {
          provide: getRepositoryToken(StudentEntity),
          useValue: repository,
        },
        {
          provide: StudyLevelService,
          useValue: studyLevelService,
        },
        {
          provide: StudySectorService,
          useValue: studySectorService,
        },
      ],
    }).compile();

    service = module.get<StudentService>(StudentService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('get()', () => {
    it('Should retrieve a student by id', async () => {
      const id = student.id;
      const result = await service.get(id);

      expect(repository.findOneBy).toHaveBeenCalledTimes(1);
      expect(repository.findOneBy).toHaveBeenCalledWith({ id });
      expect(result).toStrictEqual(student);
    });

    it('Should retrieve a student by id with null fields', async () => {
      const id = studentWithNullFields.id;
      repository.findOneBy.mockResolvedValueOnce(studentWithNullFields);
      const result = await service.get(id);

      expect(repository.findOneBy).toHaveBeenCalledTimes(1);
      expect(repository.findOneBy).toHaveBeenCalledWith({ id });
      expect(result).toStrictEqual(studentWithNullFields);
    });

    it('Should throw a StudentNotFoundException if study level is not found', async () => {
      const exception = new StudentNotFoundException(student.id);
      repository.findOneBy.mockResolvedValueOnce(null);

      await expect(service.get(student.id)).rejects.toThrow(exception);
    });
  });

  describe('getAll()', () => {
    it('Should retrieve all students', async () => {
      const result = await service.getAll();

      expect(repository.find).toHaveBeenCalledTimes(1);
      expect(result).toStrictEqual(studentList);
    });
  });

  describe('create()', () => {
    it('Should create and save a new student', async () => {
      const result = await service.create(baseStudent);

      expect(repository.create).toHaveBeenCalledTimes(1);
      expect(repository.save).toHaveBeenCalledTimes(1);
      expect(repository.create).toHaveBeenCalledWith(baseStudent);
      expect(repository.save).toHaveBeenCalledWith(student);
      expect(result).toStrictEqual(student);
    });

    it('Should create and save a new student with null fields', async () => {
      repository.create.mockReturnValueOnce(studentWithNullFields);
      repository.save.mockResolvedValueOnce(studentWithNullFields);
      studyLevelService.shouldHaveSector.mockReturnValueOnce(false);
      const result = await service.create(baseStudentWithNullFields);

      expect(result).toStrictEqual(studentWithNullFields);
    });
  });
});
