import { DataSource, Repository } from 'typeorm';
import { StudyLevelEntity } from 'src/study-level/study-level.entity';
import { StudySpecialtyEntity } from 'src/study-specialty/study-specialty.entity';
import { STUDY_LEVELS } from './data/study-level.data';
import { STUDY_SPECIALTIES } from './data/study-specialty.data';

export class SeedService {
  private studyLevelRepository: Repository<StudyLevelEntity>;
  private studySpecialtyRepository: Repository<StudySpecialtyEntity>;

  constructor(private dataSource: DataSource) {
    this.studyLevelRepository = this.dataSource.getRepository(StudyLevelEntity);
    this.studySpecialtyRepository =
      this.dataSource.getRepository(StudySpecialtyEntity);
  }

  public async seedData(): Promise<void> {
    await this.seedStudyLevels();
    await this.seedStudySpecialties();
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
}
