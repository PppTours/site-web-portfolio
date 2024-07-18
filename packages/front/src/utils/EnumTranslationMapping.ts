import { I18nKey } from 'src/i18n/I18nKey';

abstract class EnumTranslationMapping<Enum extends string> {
  protected abstract translationKeyMapping: Record<Enum, I18nKey>;

  public getTranslationKey(enumField: Enum): I18nKey {
    return this.translationKeyMapping[enumField];
  }

  public getAllTranslationKeys(): I18nKey[] {
    return Object.values(this.translationKeyMapping);
  }

  public getMapping(): Record<Enum, I18nKey> {
    return this.translationKeyMapping;
  }
}

export default EnumTranslationMapping;
