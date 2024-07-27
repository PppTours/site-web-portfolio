import { StudySectorEntity } from 'src/study-sector/study-sector.entity';
import { StudySectorInitialism } from 'src/study-sector/enums/study-sector.enum';

type StudySectorCreation = Omit<StudySectorEntity, 'id' | 'students'>;

export const STUDY_SPECIALTIES: StudySectorCreation[] = [
  {
    initialism: StudySectorInitialism.PEIP,
    title: 'Parcours des Écoles d’Ingénieurs Polytech',
  },
  {
    initialism: StudySectorInitialism.DAE,
    title: "Génie de l'aménagement et de l'environnement",
  },
  {
    initialism: StudySectorInitialism.DEE,
    title: 'Électronique et génie électrique',
  },
  {
    initialism: StudySectorInitialism.DI,
    title: 'Informatique',
  },
  {
    initialism: StudySectorInitialism.DMS,
    title: 'Mécanique et conception des systèmes',
  },
  {
    initialism: StudySectorInitialism.ISIE,
    title:
      'Informatique et systèmes intelligents embarqués (par apprentissage)',
  },
  {
    initialism: StudySectorInitialism.MMA,
    title: 'Mécanique et matériaux (par apprentissage)',
  },
];
