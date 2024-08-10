import { Test, TestingModule } from '@nestjs/testing';
import { StudyLevelEntity } from 'src/study-level/entities/study-level.entity';
import { StudyLevel } from 'src/study-level/enums/study-level.enum';
import { StudyLevelService } from 'src/study-level/services/study-level.service';
import { StudySectorEntity } from 'src/study-sector/entities/study-sector.entity';
import { StudySectorInitialism } from 'src/study-sector/enums/study-sector.enum';
import { StudentWithNoSectorRequiredException } from '../exceptions/student-with-no-specialty-required.exception';
import { StudentWithSectorRequiredException } from '../exceptions/student-with-specialty-required.exception';
import { StudentValidationService } from './student-validation.service';

describe('StudentValidationService', () => {
  let studentValidationService: StudentValidationService;
  let studyLevelService: jest.Mocked<Partial<StudyLevelService>>;

  const studyLevel: StudyLevelEntity = {
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

  beforeEach(async () => {
    studyLevelService = {
      shouldHaveSector: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudentValidationService,
        {
          provide: StudyLevelService,
          useValue: studyLevelService,
        },
      ],
    }).compile();

    studentValidationService = module.get<StudentValidationService>(
      StudentValidationService,
    );
  });

  describe('assertStudyLevelAndSectorCompatibility()', () => {
    it('Should throw a StudentWithSectorRequiredException if the study level should have a sector', () => {
      studyLevelService.shouldHaveSector.mockReturnValueOnce(true);
      expect(() =>
        studentValidationService.assertStudyLevelAndSectorCompatibility(
          studyLevel,
          null,
        ),
      ).toThrow(new StudentWithSectorRequiredException(studyLevel));
    });

    it("Should throw a StudentWithNoSectorRequiredException if the study level shouldn't have a sector", () => {
      studyLevelService.shouldHaveSector.mockReturnValueOnce(false);
      expect(() =>
        studentValidationService.assertStudyLevelAndSectorCompatibility(
          studyLevel,
          studySector,
        ),
      ).toThrow(new StudentWithNoSectorRequiredException(studyLevel));
    });

    it('Should return true if the study level should have a sector and does', () => {
      studyLevelService.shouldHaveSector.mockReturnValueOnce(true);
      expect(() =>
        studentValidationService.assertStudyLevelAndSectorCompatibility(
          studyLevel,
          studySector,
        ),
      ).not.toThrow();
    });

    it("Should return true if the study level shouldn't have a sector and does", () => {
      studyLevelService.shouldHaveSector.mockReturnValueOnce(false);
      expect(() =>
        studentValidationService.assertStudyLevelAndSectorCompatibility(
          studyLevel,
          null,
        ),
      ).not.toThrow();
    });
  });
});
