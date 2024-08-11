import { StudentEntity } from 'src/student/entities/student.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { StudySectorInitialism } from '../enums/study-sector.enum';

@Entity('study_sector')
export class StudySectorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    enum: StudySectorInitialism,
    unique: true,
  })
  initialism: StudySectorInitialism;

  @Column()
  title: string;

  @OneToMany(() => StudentEntity, (student) => student.studySector)
  students: StudentEntity[];
}

export type BaseStudySectorEntity = Omit<StudySectorEntity, 'id' | 'students'>;
