import frenchLanguageIcon from 'src/assets/icons/flags/France.png';
import englishLanguageIcon from 'src/assets/icons/flags/United-Kingdom.png';
import IconButton from 'src/components/IconButton/IconButton';
import useTranslation from 'src/hooks/useTranslation';
import { SupportedLanguages } from 'src/i18n/i18n';
import AdditionalClassName from 'src/types/AdditionalClassName';

type ILanguageButton = AdditionalClassName;

/**
 * Button to toggle the language of the app.
 */
export default function LanguageButton({ className }: ILanguageButton) {
  const { currentLanguage, changeLanguage } = useTranslation();
  const isFrenchLanguage = currentLanguage === SupportedLanguages.French;

  /**
   * Toggle language of the app.
   */
  function handleClick(): void {
    const language = isFrenchLanguage ? SupportedLanguages.English : SupportedLanguages.French;

    changeLanguage(language);
  }

  return (
    <IconButton
      className={`language-button ${className ?? ''}`}
      onClick={handleClick}
      icon={isFrenchLanguage ? frenchLanguageIcon : englishLanguageIcon}
    />
  );
}
