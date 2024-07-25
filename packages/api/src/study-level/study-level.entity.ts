import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StudyLevel } from './study-level.enum';
import { StudentEntity } from 'src/student/student.entity';

@Entity('study_level')
export class StudyLevelEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    enum: StudyLevel,
    unique: true,
  })
  name: StudyLevel;

  @OneToMany(() => StudentEntity, (student) => student.level)
  students: StudentEntity[];
}
