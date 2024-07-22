import { StudySpecialtyEntity } from 'src/study-specialty/study-specialty.entity';
import { StudySpecialtyInitialism } from 'src/study-specialty/study-specialty.enum';

type StudySpecialtyCreation = Omit<StudySpecialtyEntity, 'id' | 'students'>;

export const STUDY_SPECIALTIES: StudySpecialtyCreation[] = [
  {
    initialism: StudySpecialtyInitialism.PEIP,
    title: 'Parcours des Écoles d’Ingénieurs Polytech',
  },
  {
    initialism: StudySpecialtyInitialism.DAE,
    title: "Génie de l'aménagement et de l'environnement",
  },
  {
    initialism: StudySpecialtyInitialism.DEE,
    title: 'Électronique et génie électrique',
  },
  {
    initialism: StudySpecialtyInitialism.DI,
    title: 'Informatique',
  },
  {
    initialism: StudySpecialtyInitialism.DMS,
    title: 'Mécanique et conception des systèmes',
  },
  {
    initialism: StudySpecialtyInitialism.ISIE,
    title:
      'Informatique et systèmes intelligents embarqués (par apprentissage)',
  },
  {
    initialism: StudySpecialtyInitialism.MMA,
    title: 'Mécanique et matériaux (par apprentissage)',
  },
];
