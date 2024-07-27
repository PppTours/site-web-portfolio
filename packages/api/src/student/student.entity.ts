import { UUID } from 'crypto';
import { StudyLevelEntity } from 'src/study-level/study-level.entity';
import { StudySectorEntity } from 'src/study-sector/study-sector.entity';
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

  @ManyToOne(() => StudyLevelEntity, (level) => level.students, {
    nullable: false,
  })
  @JoinColumn({ name: 'level_id' })
  level: StudyLevelEntity;

  @ManyToOne(() => StudySectorEntity, (level) => level.students, {
    nullable: true,
  })
  @JoinColumn({ name: 'sector_id' })
  sector?: StudySectorEntity;
}
