export enum StudyLevel {
  Peip1 = 'Peip1',
  Peip2 = 'Peip2',
  Year3 = 'Year3',
  Year4 = 'Year4',
  Year5 = 'Year5',
  Year6 = 'Year6',
}

export const ALL_STUDY_LEVELS: StudyLevel[] = [
  StudyLevel.Peip1,
  StudyLevel.Peip2,
  StudyLevel.Year3,
  StudyLevel.Year4,
  StudyLevel.Year5,
  StudyLevel.Year6,
];

export const STUDY_LEVELS_WITHOUT_SECTOR: StudyLevel[] = [
  StudyLevel.Peip1,
  StudyLevel.Peip2,
];

export const STUDY_LEVELS_WITH_SECTOR: StudyLevel[] = ALL_STUDY_LEVELS.filter(
  (studyLevel) => !STUDY_LEVELS_WITHOUT_SECTOR.includes(studyLevel),
);
