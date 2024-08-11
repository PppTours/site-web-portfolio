import { Test } from '@nestjs/testing';
import { StudyLevel } from 'src/study-level/enums/study-level.enum';

import { StudentDTO } from '../dtos/student.dto';
import { StudentListDTO } from '../dtos/student-list.dto';
import { BaseStudentEntity, StudentEntity } from '../entities/student.entity';
import { StudentCreationValidationPipe } from '../pipes/student-creation-validation.pipe';
import { StudentService } from '../services/student.service';
import { StudentMapperService } from '../services/student-mapper.service';
import { StudentController } from './student.controller';

describe('StudentController', () => {
  let controller: StudentController;
  let service: jest.Mocked<Partial<StudentService>>;
  let mapper: jest.Mocked<Partial<StudentMapperService>>;

  const baseStudent: BaseStudentEntity = {
    firstName: 'John',
    lastName: 'Doe',
    profilePictureUrl: 'www.images.com/test.png',
    studyLevel: {
      id: 1,
      name: StudyLevel.Peip1,
      students: [],
    },
    studySector: null,
  };

  const student: StudentEntity = {
    ...baseStudent,
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

  const studentListDTO: StudentListDTO = {
    count: 1,
    students: [studentDTO],
  };

  beforeEach(async () => {
    service = {
      getAll: jest.fn().mockResolvedValue(studentList),
      create: jest.fn(),
    };

    mapper = {
      toDTO: jest.fn().mockResolvedValue(studentDTO),
      toListDTO: jest.fn().mockResolvedValue(studentListDTO),
    };

    const moduleRef = await Test.createTestingModule({
      controllers: [StudentController],
      providers: [
        {
          provide: StudentService,
          useValue: service,
        },
        {
          provide: StudentMapperService,
          useValue: mapper,
        },
      ],
    })
      .overridePipe(StudentCreationValidationPipe)
      .useValue({ transform: jest.fn().mockResolvedValue(baseStudent) })
      .compile();

    controller = moduleRef.get<StudentController>(StudentController);
  });

  describe('getAll', () => {
    it('Should return all students', async () => {
      const result = await controller.getAll();

      expect(service.getAll).toHaveBeenCalledTimes(1);
      expect(mapper.toListDTO).toHaveBeenCalledTimes(1);
      expect(result).toStrictEqual(studentListDTO);
    });
  });

  describe('create', () => {
    it('Should create a student', async () => {
      const result = await controller.create(baseStudent);

      expect(service.create).toHaveBeenCalledTimes(1);
      expect(mapper.toDTO).toHaveBeenCalledTimes(1);
      expect(service.create).toHaveBeenCalledWith(baseStudent);
      expect(result).toStrictEqual(studentDTO);
    });
  });
});
