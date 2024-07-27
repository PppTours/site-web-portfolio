import { StudentService } from 'src/student/student.service';
import { StudyLevelService } from 'src/study-level/study-level.service';
import { StudySpecialtyService } from 'src/study-specialty/study-specialty.service';
import { STUDENTS } from './data/student.data';
import { STUDY_LEVELS } from './data/study-level.data';
import { STUDY_SPECIALTIES } from './data/study-specialty.data';

export class SeedService {
  constructor(
    private studentService: StudentService,
    private studyLevelService: StudyLevelService,
    private studySpecialtyService: StudySpecialtyService,
  ) {}

  public async seedData(): Promise<void> {
    await this.seedStudyLevels();
    await this.seedStudySpecialties();
    await this.seedStudents();
  }

  private async seedStudyLevels(): Promise<void> {
    for (const studyLevel of STUDY_LEVELS) {
      await this.studyLevelService.create(studyLevel);
    }
  }

  private async seedStudySpecialties(): Promise<void> {
    for (const studySpecialty of STUDY_SPECIALTIES) {
      await this.studySpecialtyService.create(studySpecialty);
    }
  }

  private async seedStudents(): Promise<void> {
    for (const student of STUDENTS) {
      await this.studentService.create(student);
    }
  }
}
