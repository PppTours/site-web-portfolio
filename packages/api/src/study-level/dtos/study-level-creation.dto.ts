import { StudyLevelEntity } from '../study-level.entity';

export type StudyLevelCreationDTO = Omit<StudyLevelEntity, 'id' | 'students'>;
