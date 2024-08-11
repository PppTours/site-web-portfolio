import { BaseStudyLevelEntity } from 'src/study-level/entities/study-level.entity';
import { StudyLevel } from 'src/study-level/enums/study-level.enum';

export const STUDY_LEVELS: BaseStudyLevelEntity[] = [
  {
    name: StudyLevel.Peip1,
  },
  {
    name: StudyLevel.Peip2,
  },
  {
    name: StudyLevel.Year3,
  },
  {
    name: StudyLevel.Year4,
  },
  {
    name: StudyLevel.Year5,
  },
];
