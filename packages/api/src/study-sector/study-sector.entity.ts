import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StudySectorInitialism } from './enums/study-sector.enum';
import { StudentEntity } from 'src/student/student.entity';

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

  @OneToMany(() => StudentEntity, (student) => student.sector)
  students: StudentEntity[];
}
