import { UUID } from 'crypto';

import { StudyLevelDTO } from '../StudentLevel/StudentLevelDTO';
import { StudySectorDTO } from '../StudentSector/StudentSectorDTO';

export interface StudentDTO {
  id: UUID;
  firstName: string;
  lastName: string;
  profilePictureUrl: string | null;
  studyLevel: StudyLevelDTO;
  studySector: StudySectorDTO | null;
}
