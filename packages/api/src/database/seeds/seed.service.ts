import { BaseStudentEntity } from 'src/student/entities/student.entity';
import { StudentService } from 'src/student/services/student.service';
import { StudyLevelEntity } from 'src/study-level/entities/study-level.entity';
import { StudyLevelService } from 'src/study-level/services/study-level.service';
import { StudySectorEntity } from 'src/study-sector/entities/study-sector.entity';
import { StudySectorService } from 'src/study-sector/services/study-sector.service';

import { STUDENTS } from './data/student.data';
import { STUDY_LEVELS } from './data/study-level.data';
import { STUDY_SECTORS } from './data/study-sector.data';

export class SeedService {
  private studyLevelEntities = new Map<number, StudyLevelEntity>();
  private studySectorEntities = new Map<number, StudySectorEntity>();

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
      const studyLevelEntity = await this.studyLevelService.create(studyLevel);
      this.studyLevelEntities.set(studyLevelEntity.id, studyLevelEntity);
    }
  }

  private async seedStudySpecialties(): Promise<void> {
    for (const studySector of STUDY_SECTORS) {
      const studySectorEntity = await this.studySectorService.create(
        studySector,
      );
      this.studySectorEntities.set(studySectorEntity.id, studySectorEntity);
    }
  }

  private async seedStudents(): Promise<void> {
    for (const student of STUDENTS) {
      const studentEntity: BaseStudentEntity = {
        ...student,
        profilePictureUrl: student.profilePictureUrl ?? null,
        studyLevel: this.studyLevelEntities.get(student.studyLevel.id),
        studySector: student.studySector?.id
          ? this.studySectorEntities.get(student.studySector.id)
          : null,
      };
      await this.studentService.create(studentEntity);
    }
  }
}
