import { UUID } from 'crypto';
import { StudyLevelEntity } from 'src/study-level/study-level.entity';
import { StudySpecialtyEntity } from 'src/study-specialty/study-specialty.entity';
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

  @ManyToOne(() => StudyLevelEntity, (level) => level.students, {})
  @JoinColumn({ name: 'level_id' })
  level: StudyLevelEntity;

  @ManyToOne(() => StudySpecialtyEntity, (level) => level.students)
  @JoinColumn({ name: 'specialty_id' })
  specialty: StudySpecialtyEntity;
}
