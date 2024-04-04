import './FilterDisplayButton.scss';

import { Button } from 'antd';
import { memo } from 'react';
import filterIcon from 'src/assets/icons/filter.svg?react';
import SvgIcon from 'src/components/SvgIcon/SvgIcon';
import useTranslation from 'src/hooks/useTranslation';
import { I18nKeys } from 'src/i18n/I18nKeys';
import AdditionalClassName from 'src/types/AdditionalClassName';

export interface IFilterDisplayButton extends AdditionalClassName {
  /**
   * Whether filters are already displayed or not.
   */
  areFiltersDisplayed: boolean;

  /**
   * Function called when the button is clicked.
   * @param {boolean} filterDisplayed Whether to display or not the filter.
   */
  onClick: (filterDisplayed: boolean) => void;
}

/**
 * Button to display filter.
 */
function FilterDisplayButton({ areFiltersDisplayed, className, onClick }: IFilterDisplayButton) {
  const { translate } = useTranslation();

  /**
   * Handle click on the button.
   */
  function handleClick(): void {
    onClick(!areFiltersDisplayed);
  }

  return (
    <div className={`filter-display ${className ?? ''}`}>
      <Button className="filter-display-button" type="text" size="small" onClick={handleClick}>
        <span className="filter-display-button__text">{` ${translate(areFiltersDisplayed ? I18nKeys.HideFilters : I18nKeys.DisplayFilters)}`}</span>
        <SvgIcon className="filter-display-button__icon" SvgComponent={filterIcon} />
      </Button>
    </div>
  );
}

export default memo(FilterDisplayButton);
