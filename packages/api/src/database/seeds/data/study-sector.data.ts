import { BaseStudySectorEntity } from 'src/study-sector/entities/study-sector.entity';
import { StudySectorInitialism } from 'src/study-sector/enums/study-sector.enum';

export const STUDY_SECTORS: BaseStudySectorEntity[] = [
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
