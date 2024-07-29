import { StudySectorEntity } from '../study-sector.entity';

export type StudySectorCreationDTO = Omit<StudySectorEntity, 'id' | 'students'>;
