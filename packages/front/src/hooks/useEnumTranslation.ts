import useTranslation from 'src/hooks/useTranslation';
import { I18nKey } from 'src/i18n/I18nKey';
import EnumTranslationMapping from 'src/utils/EnumTranslationMapping';

interface EnumTranslationReturn<Enum extends string> {
  getTranslation: (key: Enum) => string;
  getAllTranslations: () => Record<Enum, string>;
}

function useEnumTranslation<Enum extends string>(
  enumTranslationMapping: EnumTranslationMapping<Enum>
): EnumTranslationReturn<Enum> {
  const { translate } = useTranslation();

  function getTranslation(field: Enum): string {
    const translationKey = enumTranslationMapping.getTranslationKey(field);
    return translate(translationKey);
  }

  function getAllTranslations(): Record<Enum, string> {
    return Object.entries(enumTranslationMapping.getMapping()).reduce(
      (translations, [enumField, i18nKey]) => ({
        ...translations,
        [enumField]: translate(i18nKey as I18nKey)
      }),
      {}
    ) as Record<Enum, string>;
  }

  return { getTranslation, getAllTranslations };
}

export default useEnumTranslation;
