import frenchLanguageIcon from 'src/assets/icons/flags/France.png';
import englishLanguageIcon from 'src/assets/icons/flags/United-Kingdom.png';
import IconButton from 'src/components/IconButton/IconButton';
import useTranslation from 'src/hooks/useTranslation';
import { SupportedLanguages } from 'src/i18n/i18n';
import AdditionalClassName from 'src/types/AdditionalClassName';

type LanguageToggleButtonProps = AdditionalClassName;

export default function LanguageToggleButton({ className }: LanguageToggleButtonProps) {
  const { currentLanguage, changeLanguage } = useTranslation();
  const isFrenchLanguage = currentLanguage === SupportedLanguages.French;

  function toggleLanguage(): void {
    const newLanguage = isFrenchLanguage ? SupportedLanguages.English : SupportedLanguages.French;
    changeLanguage(newLanguage);
  }

  return (
    <IconButton
      className={`language-button ${className ?? ''}`}
      onClick={toggleLanguage}
      iconSrc={isFrenchLanguage ? frenchLanguageIcon : englishLanguageIcon}
    />
  );
}
