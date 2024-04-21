import { StudyLevel } from 'src/assets/mock/FakeProfiles';
import { I18nKey } from 'src/i18n/I18nKey';

const studentLevelTranslationKeyMap = {
  [StudyLevel.Peip1]: I18nKey.Peip1,
  [StudyLevel.Peip2]: I18nKey.Peip2,
  [StudyLevel.Year3]: I18nKey.Year3,
  [StudyLevel.Year4]: I18nKey.Year4,
  [StudyLevel.Year5]: I18nKey.Year5,
  [StudyLevel.Year6]: I18nKey.Year6,
  [StudyLevel.Graduated]: I18nKey.Graduated
};

class StudentLevel {
  public static getTranslationKey(studyLevel: StudyLevel): I18nKey {
    return studentLevelTranslationKeyMap[studyLevel];
  }
}

export default StudentLevel;
