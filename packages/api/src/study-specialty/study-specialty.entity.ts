import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StudySpecialtyInitialism } from './enums/study-specialty.enum';
import { StudentEntity } from 'src/student/student.entity';

@Entity('study_specialty')
export class StudySpecialtyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    enum: StudySpecialtyInitialism,
    unique: true,
  })
  initialism: StudySpecialtyInitialism;

  @Column()
  title: string;

  @OneToMany(() => StudentEntity, (student) => student.specialty)
  students: StudentEntity[];
}
