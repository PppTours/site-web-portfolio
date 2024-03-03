import './HeaderActions.scss';

import LanguageButton from '../../../../../components/IconButton/LanguageButton';
import ThemeButton from '../../../../../components/IconButton/ThemeButton';
import AdditionalClassName from '../../../../../types/IClassName';

type IHeaderActions = AdditionalClassName;

/**
 * Header actions.
 */
export default function HeaderActions({ className }: IHeaderActions) {
  return (
    <div className={`header-actions ${className ?? ''}`}>
      <ThemeButton className="action-button action-button--theme" />
      <LanguageButton className="action-button action-button--language" />
    </div>
  );
}
