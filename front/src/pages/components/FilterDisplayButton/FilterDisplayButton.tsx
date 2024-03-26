import './FilterDisplayButton.scss';

import { Button } from 'antd';
import { memo, useState } from 'react';
import filterIcon from 'src/assets/icons/filter.svg?react';
import SvgIcon from 'src/components/SvgIcon/SvgIcon';
import AdditionalClassName from 'src/types/IClassName';

export interface IFilterDisplayButton extends AdditionalClassName {
  /**
   * Initial button value depending on whether filters are already displayed or not.
   */
  initialValue: boolean;

  /**
   * Function called when the button is clicked.
   * @param {boolean} filterDisplayed Whether to display or not the filter.
   */
  onClick: (filterDisplayed: boolean) => void;
}

/**
 * Button to display filter.
 */
function FilterDisplayButton({ initialValue, className, onClick }: IFilterDisplayButton) {
  const [display, setDisplay] = useState<boolean>(initialValue);

  /**
   * Handle click on the button.
   */
  function handleClick(): void {
    const filterDisplayed = !display;
    setDisplay(filterDisplayed);
    onClick(filterDisplayed);
  }

  return (
    <div className={`filter-display ${className ?? ''}`}>
      <Button className="filter-display-button" type="text" size="small" onClick={handleClick}>
        <span className="filter-display-button__text">{` ${display ? 'Masquer' : 'Afficher'} les filtres`}</span>
        <SvgIcon className="filter-display-button__icon" SvgComponent={filterIcon} />
      </Button>
    </div>
  );
}

export default memo(FilterDisplayButton);
