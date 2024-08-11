import { I18nKey } from 'src/i18n/I18nKey';
import EnumTranslationMapping from 'src/utils/EnumTranslationMapping';

import StudySectorInitialism from './StudySectorInitialism';

class StudySectorInitialismTranslationMapping extends EnumTranslationMapping<StudySectorInitialism> {
  translationKeyMapping = {
    [StudySectorInitialism.DI]: I18nKey.DI,
    [StudySectorInitialism.DAE]: I18nKey.DAE,
    [StudySectorInitialism.DEE]: I18nKey.DEE,
    [StudySectorInitialism.DMS]: I18nKey.DMS,
    [StudySectorInitialism.ISIE]: I18nKey.ISIE,
    [StudySectorInitialism.MMA]: I18nKey.MMA
  };
}

export const studySectorTranslationMapping = new StudySectorInitialismTranslationMapping();
