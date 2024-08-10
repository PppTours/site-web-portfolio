import { UUID } from 'crypto';
import { StudyLevelEntity } from 'src/study-level/entities/study-level.entity';
import { StudySectorEntity } from 'src/study-sector/entities/study-sector.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('student')
export class StudentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({
    name: 'profile_picture_url',
    nullable: true,
  })
  profilePictureUrl: string;

  @ManyToOne(() => StudyLevelEntity, (studyLevel) => studyLevel.students, {
    nullable: false,
  })
  @JoinColumn({ name: 'study_level_id' })
  studyLevel: StudyLevelEntity;

  @ManyToOne(() => StudySectorEntity, (studySector) => studySector.students, {
    nullable: true,
  })
  @JoinColumn({ name: 'study_sector_id' })
  studySector?: StudySectorEntity;
}

export type BaseStudentEntity = Omit<StudentEntity, 'id'>;
