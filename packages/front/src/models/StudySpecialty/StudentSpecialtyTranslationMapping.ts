import { I18nKey } from 'src/i18n/I18nKey';
import EnumTranslationMapping from 'src/utils/EnumTranslationMapping';

import StudySpecialty from './StudySpecialty';

class StudentSpecialtyTranslationMapping extends EnumTranslationMapping<StudySpecialty> {
  translationKeyMapping = {
    [StudySpecialty.DI]: I18nKey.DI,
    [StudySpecialty.DAE]: I18nKey.DAE,
    [StudySpecialty.DEE]: I18nKey.DEE,
    [StudySpecialty.DMS]: I18nKey.DMS,
    [StudySpecialty.ISIE]: I18nKey.ISIE,
    [StudySpecialty.MMA]: I18nKey.MMA
  };
}

export const studySpecialtyTranslationMapping = new StudentSpecialtyTranslationMapping();
