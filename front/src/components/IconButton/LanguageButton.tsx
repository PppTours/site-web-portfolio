import './IconButton.scss';

import { Button } from 'antd';

import frenchLanguageIcon from '../../assets/icons/flags/France.png';
import englishLanguageIcon from '../../assets/icons/flags/United-Kingdom.png';
import { useDispatch } from '../../contexts/DispatchContext';
import { LanguagesEnum, useLanguage } from '../../contexts/LanguageContext';
import { ReducerActionsEnum } from '../../reducers/ReducerActionsEnum';

interface ILanguageButton {
  /**
   * Additional class name.
   */
  className?: string;
}

/**
 * Get button to toggle the language of the app.
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
    <Button
      className={`icon-button language-button ${className ?? ''}`}
      type="text"
      shape="circle"
      onClick={handleClick}
      icon={
        <img
          className="icon-button__icon"
          src={isFrenchLanguage ? frenchLanguageIcon : englishLanguageIcon}
        />
      }
    />
  );
}
