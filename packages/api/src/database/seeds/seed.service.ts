import { DataSource, Repository } from 'typeorm';
import { StudyLevelEntity } from 'src/study-level/study-level.entity';
import { StudySpecialtyEntity } from 'src/study-specialty/study-specialty.entity';
import { STUDY_LEVELS } from './data/study-level.data';
import { STUDY_SPECIALTIES } from './data/study-specialty.data';
import { STUDENTS } from './data/student.data';
import { StudentEntity } from 'src/student/student.entity';

export class SeedService {
  private studyLevelRepository: Repository<StudyLevelEntity>;
  private studySpecialtyRepository: Repository<StudySpecialtyEntity>;
  private studentRepository: Repository<StudentEntity>;

  constructor(private dataSource: DataSource) {
    this.studyLevelRepository = this.dataSource.getRepository(StudyLevelEntity);
    this.studySpecialtyRepository =
      this.dataSource.getRepository(StudySpecialtyEntity);
    this.studentRepository = this.dataSource.getRepository(StudentEntity);
  }

  public async seedData(): Promise<void> {
    await this.seedStudyLevels();
    await this.seedStudySpecialties();
    await this.seedStudents();
  }

  private async seedStudyLevels(): Promise<void> {
    for (const studyLevel of STUDY_LEVELS) {
      const studyLevelEntity = this.studyLevelRepository.create(studyLevel);
      await this.studyLevelRepository.save(studyLevelEntity);
    }
  }

  private async seedStudySpecialties(): Promise<void> {
    for (const studySpecialty of STUDY_SPECIALTIES) {
      const studySpecialtyEntity =
        this.studySpecialtyRepository.create(studySpecialty);
      await this.studySpecialtyRepository.save(studySpecialtyEntity);
    }
  }

  private async seedStudents(): Promise<void> {
    for (const student of STUDENTS) {
      const studentEntity = this.studentRepository.create(student);
      await this.studentRepository.save(studentEntity);
    }
  }
}
