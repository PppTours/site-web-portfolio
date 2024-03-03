import frenchLanguageIcon from '../../assets/icons/flags/France.png';
import englishLanguageIcon from '../../assets/icons/flags/United-Kingdom.png';
import { useDispatch } from '../../contexts/DispatchContext';
import { LanguagesEnum, useLanguage } from '../../contexts/LanguageContext';
import { ReducerActionsEnum } from '../../reducers/ReducerActionsEnum';
import AdditionalClassName from '../../types/IClassName';
import IconButton from './IconButton';

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
  function handleClick() {
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
