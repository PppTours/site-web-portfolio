import { I18nKey } from 'src/i18n/I18nKey';
import EnumTranslationMapping from 'src/utils/EnumTranslationMapping';

import StudySector from './StudySector';

class StudentSectorTranslationMapping extends EnumTranslationMapping<StudySector> {
  translationKeyMapping = {
    [StudySector.DI]: I18nKey.DI,
    [StudySector.DAE]: I18nKey.DAE,
    [StudySector.DEE]: I18nKey.DEE,
    [StudySector.DMS]: I18nKey.DMS,
    [StudySector.ISIE]: I18nKey.ISIE,
    [StudySector.MMA]: I18nKey.MMA
  };
}

export const studySectorTranslationMapping = new StudentSectorTranslationMapping();
