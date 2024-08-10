import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StudyLevel } from '../enums/study-level.enum';
import { StudentEntity } from 'src/student/entities/student.entity';

@Entity('study_level')
export class StudyLevelEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    enum: StudyLevel,
    unique: true,
  })
  name: StudyLevel;

  @OneToMany(() => StudentEntity, (student) => student.studyLevel)
  students: StudentEntity[];
}

export type BaseStudyLevelEntity = Omit<StudyLevelEntity, 'id' | 'students'>;
