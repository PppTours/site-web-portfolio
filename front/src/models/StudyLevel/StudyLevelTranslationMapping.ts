import { I18nKey } from 'src/i18n/I18nKey';
import EnumTranslationMapping from 'src/utils/EnumTranslationMapping';

import StudyLevel from './StudyLevel';

class StudyLevelTranslationMapping extends EnumTranslationMapping<StudyLevel> {
  translationKeyMapping = {
    [StudyLevel.Peip1]: I18nKey.Peip1,
    [StudyLevel.Peip2]: I18nKey.Peip2,
    [StudyLevel.Year3]: I18nKey.Year3,
    [StudyLevel.Year4]: I18nKey.Year4,
    [StudyLevel.Year5]: I18nKey.Year5,
    [StudyLevel.Graduated]: I18nKey.Graduated
  };
}

export const studyLevelTranslationMapping = new StudyLevelTranslationMapping();
