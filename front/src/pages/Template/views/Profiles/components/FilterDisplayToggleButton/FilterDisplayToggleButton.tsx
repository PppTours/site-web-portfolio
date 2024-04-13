import './FilterDisplayToggleButton.scss';

import { Button } from 'antd';
import { memo } from 'react';
import filterIcon from 'src/assets/icons/filter.svg?react';
import SvgIcon from 'src/components/SvgIcon/SvgIcon';
import useTranslation from 'src/hooks/useTranslation';
import { I18nKeys } from 'src/i18n/I18nKeys';
import AdditionalClassName from 'src/types/AdditionalClassName';

export interface FilterDisplayToggleButtonProps extends AdditionalClassName {
  areFiltersDisplayed: boolean;
  onClick: (areFiltersDisplayed: boolean) => void;
}

function FilterDisplayToggleButton({
  areFiltersDisplayed,
  className,
  onClick
}: FilterDisplayToggleButtonProps) {
  const { translate } = useTranslation();

  function toggleFilterDisplay(): void {
    onClick(!areFiltersDisplayed);
  }

  return (
    <div className={`filter-display ${className ?? ''}`}>
      <Button
        className="filter-display-button"
        type="text"
        size="small"
        onClick={toggleFilterDisplay}
      >
        <span className="filter-display-button__text">
          {translate(areFiltersDisplayed ? I18nKeys.HideFilters : I18nKeys.DisplayFilters)}
        </span>
        <SvgIcon className="filter-display-button__icon" svg={filterIcon} />
      </Button>
    </div>
  );
}

export default memo(FilterDisplayToggleButton);
