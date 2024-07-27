import { StudentService } from 'src/student/student.service';
import { StudyLevelService } from 'src/study-level/study-level.service';
import { STUDENTS } from './data/student.data';
import { STUDY_LEVELS } from './data/study-level.data';
import { STUDY_SPECIALTIES } from './data/study-sector.data';
import { StudySectorService } from 'src/study-sector/study-sector.service';

export class SeedService {
  constructor(
    private studentService: StudentService,
    private studyLevelService: StudyLevelService,
    private studySectorService: StudySectorService,
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
    for (const studySector of STUDY_SPECIALTIES) {
      await this.studySectorService.create(studySector);
    }
  }

  private async seedStudents(): Promise<void> {
    for (const student of STUDENTS) {
      await this.studentService.create(student);
    }
  }
}
