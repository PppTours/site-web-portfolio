import frenchLanguageIcon from 'src/assets/icons/flags/France.png';
import englishLanguageIcon from 'src/assets/icons/flags/United-Kingdom.png';
import IconButton from 'src/components/IconButton/IconButton';
import { LanguagesEnum } from 'src/contexts/LanguageContext';
import useDispatch from 'src/hooks/useDispatch';
import useLanguage from 'src/hooks/useLanguage';
import { ReducerActionsEnum } from 'src/reducers/ReducerActionsEnum';
import AdditionalClassName from 'src/types/IClassName';

type ILanguageButton = AdditionalClassName;

/**
 * Button to toggle the language of the app.
 */
export default function LanguageButton({ className }: ILanguageButton) {
  const dispatch = useDispatch();
  const currentLanguage = useLanguage();

  const isFrenchLanguage = currentLanguage === LanguagesEnum.French;

  /**
   * Toggle language of the app.
   */
  function handleClick(): void {
    dispatch?.({
      type: ReducerActionsEnum.SetLanguage,
      content: isFrenchLanguage ? LanguagesEnum.English : LanguagesEnum.French
    });
  }

  return (
    <IconButton
      className={`language-button ${className ?? ''}`}
      onClick={handleClick}
      icon={isFrenchLanguage ? frenchLanguageIcon : englishLanguageIcon}
    />
  );
}
