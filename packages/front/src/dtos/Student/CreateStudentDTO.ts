import { GetStudyLevelDTO } from '../StudentLevel/GetStudyLevelDTO';
import { GetStudySectorDTO } from '../StudentSector/GetStudySectorDTO';

export interface CreateStudentDTO {
  firstName: string;
  lastName: string;
  profilePictureUrl?: string;
  studyLevel: GetStudyLevelDTO;
  studySector?: GetStudySectorDTO;
}
