import { StudyLevel } from 'src/study-level/enums/study-level.enum';
import { StudyLevelEntity } from 'src/study-level/study-level.entity';

type StudyLevelCreation = Omit<StudyLevelEntity, 'id' | 'students'>;

export const STUDY_LEVELS: StudyLevelCreation[] = [
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
  {
    name: StudyLevel.Year6,
  },
];
