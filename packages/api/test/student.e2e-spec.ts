import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { StudentController } from 'src/student/controllers/student.controller';
import { CreateStudentDTO } from 'src/student/dtos/create-student.dto';
import { StudentDTO } from 'src/student/dtos/student.dto';
import { StudentListDTO } from 'src/student/dtos/student-list.dto';
import { StudentEntity } from 'src/student/entities/student.entity';
import { StudentWithNoSectorRequiredException } from 'src/student/exceptions/student-with-no-specialty-required.exception';
import { StudentWithSectorRequiredException } from 'src/student/exceptions/student-with-specialty-required.exception';
import { StudentService } from 'src/student/services/student.service';
import { StudentMapperService } from 'src/student/services/student-mapper.service';
import { StudentValidationService } from 'src/student/services/student-validation.service';
import { StudyLevelEntity } from 'src/study-level/entities/study-level.entity';
import { StudyLevel } from 'src/study-level/enums/study-level.enum';
import { StudyLevelService } from 'src/study-level/services/study-level.service';
import { StudySectorEntity } from 'src/study-sector/entities/study-sector.entity';
import { StudySectorInitialism } from 'src/study-sector/enums/study-sector.enum';
import { StudySectorService } from 'src/study-sector/services/study-sector.service';
import * as request from 'supertest';
import { Repository } from 'typeorm';

describe('StudentController (e2e)', () => {
  let app: INestApplication;
  let repository: jest.Mocked<Partial<Repository<StudentEntity>>>;
  let mapper: jest.Mocked<Partial<StudentMapperService>>;
  let studyLevelService: jest.Mocked<Partial<StudyLevelService>>;
  let studySectorService: jest.Mocked<Partial<StudySectorService>>;

  const studyLevel: StudyLevelEntity = {
    id: 1,
    name: StudyLevel.Year3,
    students: [],
  };

  const studyLevelWithoutSector: StudyLevelEntity = {
    id: 1,
    name: StudyLevel.Peip1,
    students: [],
  };

  const studySector: StudySectorEntity = {
    id: 1,
    initialism: StudySectorInitialism.DAE,
    title: 'DAE',
    students: [],
  };

  const student: StudentEntity = {
    firstName: 'John',
    lastName: 'Doe',
    profilePictureUrl: null,
    studyLevel: studyLevelWithoutSector,
    studySector: null,
    id: '67d6cab4-89f1-4c53-9d5d-1b3c78a18915',
  };

  const studentList: StudentEntity[] = [student];

  const studentDTO: StudentDTO = {
    id: student.id,
    firstName: student.firstName,
    lastName: student.lastName,
    profilePictureUrl: student.profilePictureUrl,
    studyLevel: {
      name: student.studyLevel.name,
    },
    studySector: student.studySector,
  };

  const createStudentDTO: CreateStudentDTO = {
    firstName: student.firstName,
    lastName: student.lastName,
    profilePictureUrl: student.profilePictureUrl,
    studyLevel: {
      id: 1,
    },
    studySector: null,
  };

  const studentListDTO: StudentListDTO = {
    count: 1,
    students: [studentDTO],
  };

  beforeEach(async () => {
    repository = {
      find: jest.fn().mockResolvedValue(studentList),
      create: jest.fn().mockResolvedValue(student),
      save: jest.fn().mockResolvedValue(student),
    };

    mapper = {
      toDTO: jest.fn().mockResolvedValue(studentDTO),
      toListDTO: jest.fn().mockResolvedValue(studentListDTO),
    };

    studyLevelService = {
      create: jest.fn().mockResolvedValue(studyLevelWithoutSector),
      get: jest.fn().mockResolvedValue(studyLevelWithoutSector),
      shouldHaveSector: jest.fn().mockReturnValue(false),
    };

    studySectorService = {
      create: jest.fn().mockResolvedValue(studySector),
      get: jest.fn().mockResolvedValue(studySector),
    };

    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [StudentController],
      providers: [
        StudentService,
        StudentValidationService,
        {
          provide: getRepositoryToken(StudentEntity),
          useValue: repository,
        },
        {
          provide: StudentMapperService,
          useValue: mapper,
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

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('/students (GET)', () => {
    it('Should retrieve all students', async () => {
      await request(app.getHttpServer())
        .get('/students')
        .expect(200)
        .expect(studentListDTO);
    });
  });

  describe('/students (POST)', () => {
    it('Should create a student', async () => {
      await request(app.getHttpServer())
        .post('/students')
        .send(createStudentDTO)
        .expect(201)
        .expect(studentDTO);
    });

    it('Should not create a Peip student with a study sector', async () => {
      const createInvalidStudentDTO: CreateStudentDTO = {
        ...createStudentDTO,
        studySector: { id: 1 },
      };
      const exception = new StudentWithNoSectorRequiredException(
        studyLevelWithoutSector,
      );

      await request(app.getHttpServer())
        .post('/students')
        .send(createInvalidStudentDTO)
        .expect({
          statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
          message: exception.message,
        });
    });

    it('Should not create an engineer student without study sector', async () => {
      const createInvalidStudentDTO: CreateStudentDTO = {
        ...createStudentDTO,
        studyLevel,
      };
      const exception = new StudentWithSectorRequiredException(studyLevel);
      studyLevelService.get.mockResolvedValueOnce(studyLevel);
      studyLevelService.shouldHaveSector.mockReturnValueOnce(true);

      await request(app.getHttpServer())
        .post('/students')
        .send(createInvalidStudentDTO)
        .expect({
          statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
          message: exception.message,
        });
    });
  });
});
