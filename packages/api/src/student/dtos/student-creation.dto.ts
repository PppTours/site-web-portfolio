import { StudentEntity } from '../student.entity';

export type StudentCreationDTO = Omit<StudentEntity, 'id'>;
