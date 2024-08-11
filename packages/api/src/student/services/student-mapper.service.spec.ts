import { Test, TestingModule } from '@nestjs/testing';
import { StudyLevelEntity } from 'src/study-level/entities/study-level.entity';
import { StudyLevel } from 'src/study-level/enums/study-level.enum';
import { StudyLevelMapperService } from 'src/study-level/services/study-level-mapper.service';
import { StudySectorEntity } from 'src/study-sector/entities/study-sector.entity';
import { StudySectorInitialism } from 'src/study-sector/enums/study-sector.enum';
import { StudySectorMapperService } from 'src/study-sector/services/study-sector-mapper.service';

import { StudentDTO } from '../dtos/student.dto';
import { StudentListDTO } from '../dtos/student-list.dto';
import { StudentEntity } from '../entities/student.entity';
import { StudentMapperService } from './student-mapper.service';

describe('StudentMapperService', () => {
  let studentMapperService: StudentMapperService;
  let studyLevelMapperService: StudyLevelMapperService;
  let studySectorMapperService: StudySectorMapperService;

  const mockStudyLevelEntity: StudyLevelEntity = {
    id: 1,
    name: StudyLevel.Peip1,
    students: [],
  };

  const mockStudySectorEntity: StudySectorEntity = {
    id: 1,
    initialism: StudySectorInitialism.DAE,
    title: 'DAE',
    students: [],
  };

  const mockStudentEntity: StudentEntity = {
    id: 'bd68fce2-daf9-4ae4-ac6c-d9c71c22996f',
    firstName: 'John',
    lastName: 'Doe',
    profilePictureUrl: null,
    studyLevel: mockStudyLevelEntity,
    studySector: mockStudySectorEntity,
  };

  const mockStudentDTO = new StudentDTO();
  mockStudentDTO.id = mockStudentEntity.id;
  mockStudentDTO.firstName = mockStudentEntity.firstName;
  mockStudentDTO.lastName = mockStudentEntity.lastName;
  mockStudentDTO.profilePictureUrl = mockStudentEntity.profilePictureUrl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudentMapperService,
        StudyLevelMapperService,
        StudySectorMapperService,
      ],
    }).compile();

    studentMapperService =
      module.get<StudentMapperService>(StudentMapperService);
    studyLevelMapperService = module.get<StudyLevelMapperService>(
      StudyLevelMapperService,
    );
    studySectorMapperService = module.get<StudySectorMapperService>(
      StudySectorMapperService,
    );

    mockStudentDTO.studyLevel =
      studyLevelMapperService.toDTO(mockStudyLevelEntity);
    mockStudentDTO.studySector = studySectorMapperService.toDTO(
      mockStudySectorEntity,
    );
  });

  describe('toDTO()', () => {
    it('Should convert an entity to DTO', () => {
      const result = studentMapperService.toDTO(mockStudentEntity);
      expect(result).toStrictEqual(mockStudentDTO);
    });
  });

  describe('toListDTO()', () => {
    const mockStudentListDTO = new StudentListDTO();
    mockStudentListDTO.count = 1;
    mockStudentListDTO.students = [mockStudentDTO];

    const mockEmptyStudentListDTO = new StudentListDTO();
    mockEmptyStudentListDTO.count = 0;
    mockEmptyStudentListDTO.students = [];

    it('Should convert entities to list DTO', () => {
      const result = studentMapperService.toListDTO([mockStudentEntity]);
      expect(result).toStrictEqual(mockStudentListDTO);
    });

    it('Should create an empty list DTO', () => {
      const result = studentMapperService.toListDTO([]);
      expect(result).toStrictEqual(mockEmptyStudentListDTO);
    });
  });
});
